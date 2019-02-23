package root.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;

import root.beans.ImgNode;
import root.beans.ImgURIResult;
import root.beans.JsonResult;
import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.RedisCode;
import root.constant.ResultCode;
import root.dto.ArticleDto;
import root.exception.CheckParamException;
import root.exception.TokenException;
import root.mapper.ArticleBindArticleCategoryMapper;
import root.mapper.ArticleBindArticleTagMapper;
import root.mapper.ArticleMapper;
import root.mapper.ArticleTagMapper;
import root.mapper.ArticleCategoryMapper;
import root.mapper.SysUserMapper;
import root.mapper.UserMapper;
import root.model.Article;
import root.model.ArticleBindArticleCategory;
import root.model.ArticleBindArticleTag;
import root.model.ArticleCategory;
import root.model.ArticleTag;
import root.model.User;
import root.param.ArticleParam;
import root.param.PageParam;
import root.redis.RedisOperator;
import root.util.DtoUtil;
import root.util.RandomUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class ArticleService {
	
	@Resource
	private ArticleMapper articaleMapper;
	@Resource
	private ArticleBindArticleCategoryMapper articleBindArticleCategoryMapper;
	@Resource
	private ArticleBindArticleTagMapper articleBindArticleTagMapper;
	@Resource
	private ArticleCategoryMapper articleCategoryMapper;
	@Resource
	private ArticleTagMapper articleTagMapper;
	@Resource
	private TokenService tokenService;
	@Resource
	private FileService fileService;
	@Resource
	private QiNiuIMGService qiNiuIMGService;
	@Resource
	private UserMapper userMapper;
	@Resource
	private SysUserMapper sysUserMapper; 
	@Resource
	private RedisOperator redis;
	
	@Transactional
	public void add(ArticleParam param) {
		/**
		 * 检查字段
		 * 检查token
		 * 给该后台用户的前台用户id文章编写数加1
		 * 创建文章对象
		 * 创建文章分类关系对象
		 * 创建文章标签关系对象
		 */
		ValidatorUtil.check(param);
		Integer userId = tokenService.checkToken();
		// 这个id是后台用户的id
		if(userId == null) {
			// token不存在
			throw new TokenException(ResultCode.TOKEN_TOLOGIN,"TOKEN到期了");
		}
		Integer frontUserId = sysUserMapper.FrontUserIdById(userId);
		if (frontUserId == null) {
			throw new CheckParamException("该后台用户","没有前台账号");
		}
		User front = userMapper.selectByPrimaryKey(frontUserId);
		if (front == null) {
			throw new CheckParamException("该后台用户","没有前台账号");
		}
		Article articale = Article.builder()
		.userId(frontUserId)
		.title(param.getTitle())
		.weight(param.getWeight())
		.faceCover(param.getCoverImg())
		.content(param.getContent())
		.createTime(new Date())
		.updateTime(new Date())
		.build();
		articaleMapper.insertSelective(articale);
		
		int articaleId = articale.getId();
		List<ArticleBindArticleCategory> collect = param.getArticleCategoryIds().stream().map( categoryId -> 
			 ArticleBindArticleCategory.builder()
			.articleId(articaleId)
			.articleCategoryId(categoryId)
			.build()
		).collect(Collectors.toList());
		List<ArticleBindArticleTag> collect2 = param.getArticleTagIds().stream().map( tagId -> 
			ArticleBindArticleTag.builder()
			.articleId(articaleId)
			.articleTagId(tagId)
			.build()
		).collect(Collectors.toList());
		articleBindArticleCategoryMapper.insertBatch(collect);
		articleBindArticleTagMapper.insertBatch(collect2);
		userMapper.increaseArtSum(frontUserId);
	}
	
	@Transactional
	public ImgURIResult getImgSrc(List<MultipartFile> formdata) {
		// 上传图片
		// 获取文件自身名称 img.jpg
		// 添加http服务器前缀和目录前缀
		// 进行返回格式创建:0:img1.jpg,1:img2.jpg,2:img3.jpg
		if (formdata != null) {
			List<String> pathList = qiNiuIMGService.getImgPaths(formdata);
			List<String> httpPaths = qiNiuIMGService.addPrefix(pathList);
			List<ImgNode> nodes = qiNiuIMGService.httpPathsToNodeList(httpPaths);
			return new ImgURIResult(nodes);
		} 
		return new ImgURIResult(Lists.newArrayList());
	}

	public PageResult<ArticleDto> list(PageParam param) {
		// 检查字段
		// 获取skip数量
		// 获得文章和用户信息
		// 获得文章分类信息
		// 计算最大页码
		// 处理合适的结构返回前端
		ValidatorUtil.check(param);
		Long total = articaleMapper.countAll();
		param.buildSkip();
		List<Article> data = articaleMapper.page(param.getPageSize(),param.getSkip());
		List<ArticleDto> dataDto = new ArrayList<ArticleDto>();
		data.stream().forEach(item -> {
			ArticleDto dto = DtoUtil.adapt(new ArticleDto(), item);
			List<ArticleCategory> articleCategoryList = this.articleCategoryMapper.getArticleCategoryListById(dto.getId());
			dto.setArticleCategoryList(articleCategoryList);
			List<String> cateNameList = dto.getArticleCategoryList().stream().map(articleCategory -> articleCategory.getName()).collect(Collectors.toList());
			dto.setCategoryName(String.join(",", cateNameList));
			dto.setOperatorerName(dto.getUser().getUsername());
			dto.setTimeAgo(TimeAgoUtils.format(dto.getUpdateTime()));
			dto.formatTime();
			dataDto.add(dto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<ArticleDto>builder().data(dataDto).pageModel(pageModel).code(200).build();
	}
	
	/**
	 * 批量删除文章,和文章绑定关系的分类关系表
	 * @param idsStr
	 */
	@Transactional
	public void delBatch(String idsStr) {
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
		.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		if(ids.size()==0) {throw new CheckParamException("选择id","为空");}
		articaleMapper.delBatch(ids);
		articleBindArticleCategoryMapper.delBatch(ids);
	}
	
	@Transactional
	public void updateBatch(String idsStr) {
		// 批量修改文章的状态
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
		.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		if(ids.size()==0) {throw new CheckParamException("选择id","为空");}
		articaleMapper.updateBatch(ids);
	}

	/**
	 * 检查字段
	 * 获得关键字过滤条件后的总数
	 * 获得skip的数量
	 * 获得文章和用户信息，根据关键字
	 * 获得文章的分类信息
	 * 计算最大页码
	 * 处理合适的结构返回前端
	 */
	public PageResult<ArticleDto> listByKeyWord(String keyword, PageParam param) {
		ValidatorUtil.check(param);
		if(StringUtils.isBlank(keyword)) {
			throw new CheckParamException("关键字","不能为空");
		}
		Long total = articaleMapper.countAllByKeyWord(keyword);
		if(total == 0) {
			return PageResult.<ArticleDto>builder().data(Lists.newArrayList()).pageModel(new PageModel()).code(200).build();
		}
		param.buildSkip();
		List<Article> data = articaleMapper.pageByKeyWord(keyword,param.getPageSize(),param.getSkip());
		List<ArticleDto> dataDto = new ArrayList<ArticleDto>();
		data.stream().forEach(item -> {
			ArticleDto dto = DtoUtil.adapt(new ArticleDto(), item);
			List<ArticleCategory> articleCategoryList = this.articleCategoryMapper.getArticleCategoryListById(dto.getId());
			dto.setArticleCategoryList(articleCategoryList);
			List<String> cateNameList = dto.getArticleCategoryList().stream().map(articleCategory -> articleCategory.getName()).collect(Collectors.toList());
			dto.setCategoryName(String.join(",", cateNameList));
			dto.setOperatorerName(dto.getUser().getUsername());
			dto.setTimeAgo(TimeAgoUtils.format(dto.getUpdateTime()));
			dto.formatTime();
			dataDto.add(dto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<ArticleDto>builder().data(dataDto).pageModel(pageModel).code(200).build();
	}
	
	/**
	 * 检查字段
	 * 查询文章
	 * 是否存在
	 * 查找分类
	 * 查找标签
	 * 处理结构返回前端
	 */
	public JsonResult<ArticleDto> detail(Integer id) {
		if ( id == null) {
			throw new CheckParamException("文章id","为空");
		}
		int count = articaleMapper.countById(id);
		if (count == 0) {
			throw new CheckParamException("文章","不存在");
		}
		Article articale = articaleMapper.selectByPrimaryKey(id);
		List<ArticleCategory> categoryList = articleCategoryMapper.getArticleCategoryListById(id);
		List<ArticleTag> tagList = articleTagMapper.getArticleTagListById(id);
		List<Integer> categoryIds = categoryList.stream().map(item -> item.getId()).collect(Collectors.toList());
		List<Integer> tagIds = tagList.stream().map(item -> item.getId()).collect(Collectors.toList());
		ArticleDto dto = DtoUtil.adapt(new ArticleDto(), articale);
		dto.setArticleCategoryIds(categoryIds);
		dto.setArticleTagIds(tagIds);
		dto.setTimeAgo(TimeAgoUtils.format(dto.getUpdateTime()));
		dto.formatTime();
		return JsonResult.<ArticleDto>success(dto);
	}

	/**
	 * 检查字段
	 * 文章是否存在
	 * 修改文章
	 * 删除原先的分类关系
	 * 新建文章的分类关系
	 * 删除原先的标签关系
	 * 新建文章的标签关系
	 */
	@Transactional
	public JsonResult<Void> update(Integer id, ArticleParam param) {
		if(id == null) {
			throw new CheckParamException("文章id","为空");
		}
		ValidatorUtil.check(param);
		int count = articaleMapper.countById(id);
		if (count == 0) {
			throw new CheckParamException("文章","不存在");
		}
		Article articale = articaleMapper.selectByPrimaryKey(id);
		articale.setTitle(param.getTitle());
		articale.setWeight(param.getWeight());
		articale.setFaceCover(param.getCoverImg());
		articale.setContent(param.getContent());
		articale.setUpdateTime(new Date());
		articaleMapper.updateByPrimaryKeySelective(articale);
		this.articleBindArticleCategoryMapper.delBatch(Lists.newArrayList(id));
		List<ArticleBindArticleCategory> collect = param.getArticleCategoryIds().stream().map( categoryId -> 
			 ArticleBindArticleCategory.builder()
			.articleId(articale.getId())
			.articleCategoryId(categoryId)
			.build()
		).collect(Collectors.toList());
		this.articleBindArticleCategoryMapper.insertBatch(collect);
		this.articleBindArticleTagMapper.delBatch(Lists.newArrayList(id));
		List<ArticleBindArticleTag> collect2 = param.getArticleTagIds().stream().map(tagId -> 
			ArticleBindArticleTag.builder()
			.articleId(articale.getId())
			.articleTagId(tagId)
			.build()
		).collect(Collectors.toList());
		this.articleBindArticleTagMapper.insertBatch(collect2);
		redis.del(RedisCode.ARTICLE_INFO_CACHE+":"+id);
		return JsonResult.<Void>success();
	}

	public ImgURIResult getCoverSrc(List<MultipartFile> formdata, String coverImg) {
		// 删除前一张,如果有的话
		// 上传图片封面至七牛云
		// 获取文件自身名称  2018/7/843_img.jpg
		// http服务器前缀和目录前缀由前端添加  
		// 进行返回格式创建:0:img1.jpg,1:img2.jpg,2:img3.jpg
		if (StringUtils.isNotBlank(coverImg) ) {
			qiNiuIMGService.delIMG(coverImg);
		}
		if (formdata != null) {
			List<String> pathList = qiNiuIMGService.getImgPaths(formdata);
			List<ImgNode> nodes = qiNiuIMGService.httpPathsToNodeList(pathList);
			return new ImgURIResult(nodes);
		} 
		return new ImgURIResult(Lists.newArrayList());
	}
}
