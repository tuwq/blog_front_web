package root.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;

import root.beans.ImgNode;
import root.beans.ImgURIResult;
import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.exception.CheckParamException;
import root.exception.LoginTokenException;
import root.mapper.ArticaleCategoryMapper;
import root.mapper.ArticaleMapper;
import root.mapper.ArticaleUserMapper;
import root.mapper.CategoryMapper;
import root.model.Articale;
import root.model.ArticaleCategory;
import root.model.Category;
import root.param.ArticleParam;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.RandomUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class ArticleService {
	
	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private ArticaleCategoryMapper articaleCategoryMapper;
	@Resource
	private ArticaleUserMapper articaleUserMapper;
	@Resource
	private CategoryMapper categoryMapper;
	@Resource
	private TokenService tokenService;
	@Resource
	private FileService fileService;
	
	@Transactional
	public void add(ArticleParam param) {
		// 检查字段
		// 检查token
		// 创建文章对象
		// TODO 数据库分类表，用户表需要更新文章数量,rabbitmq
		// 创建文章分类关系对象
		// 插入
		ValidatorUtil.check(param);
		Integer userId = tokenService.checkToken();
		if(userId == null) {
			// token不存在
			throw new LoginTokenException(ResultCode.TOKEN_MATURITY_TOLOGIN,"LOGIN_TOKEN到期了");
		}
		Articale articale = Articale.builder()
		.userId(userId)
		.sysUserId(userId)
		.title(param.getTitle())
		.content(param.getContent())
		.createTime(new Date())
		.updateTime(new Date())
		.build();
		articaleMapper.insertSelective(articale);
		int articaleId = articale.getId();
		List<ArticaleCategory> collect = param.getCategoryNames().stream().map( categoryId -> 
			 ArticaleCategory.builder()
			.articaleId(articaleId)
			.categoryId(categoryId)
			.build()
		).collect(Collectors.toList());
		articaleCategoryMapper.insertBatch(collect);
	}
	
	@Transactional
	public ImgURIResult getImgSrc(List<MultipartFile> formdata) {
		// 上传图片
		// 获取文件自身名称 img.jpg
		// 添加http服务器前缀
		// 进行返回格式创建:0:img1.jpg,1:img2.jpg,2:img3.jpg
		if (formdata != null) {
			List<String> pathList = fileService.getImgPaths(formdata);
			List<String> httpPaths = fileService.addPrefix(pathList);
			List<ImgNode> nodes = fileService.httpPathsToNodeList(httpPaths);
			return new ImgURIResult(nodes);
		} 
		return new ImgURIResult(Lists.newArrayList());
	}

	public PageResult<ArticaleDto> list(PageParam param) {
		// 检查字段
		// 获取skip数量
		// 获得文章和用户信息
		// 获得文章分类信息
		// 计算最大页码
		// 处理合适的结构返回前端
		ValidatorUtil.check(param);
		Long total = articaleMapper.countAll();
		param.buildSkip();
		List<Articale> data = articaleMapper.page(param.getPageSize(),param.getSkip());
		List<Integer> ids = data.stream().map(item -> item.getId()).collect(Collectors.toList());
		for (int i = 0; i< ids.size();i++ ) {
			List<Category> cateList = categoryMapper.getArtCategoryListById(ids.get(i));
			data.get(i).setCategoryList(cateList);
		}
		PageModel pageModel = new PageModel(param.getPageSize(),param.getCurrentPage(),total,data.size());
		List<ArticaleDto> dtoData = data.stream().map(item -> 
			DtoUtil.adapt(new ArticaleDto(), item)
		).collect(Collectors.toList());
		dtoData.forEach(dto -> {
			List<String> cateNameList = dto.getCategoryList().stream().map(item -> item.getName()).collect(Collectors.toList());
			dto.setCategoryName(String.join(",", cateNameList));
			dto.setOperatorerName(dto.getUser().getUsername());
			dto.setTimeAgo(TimeAgoUtils.format(dto.getUpdateTime()));
			dto.formatTime();
		});
		return PageResult.<ArticaleDto>builder().data(dtoData).pageModel(pageModel).build();
	}
	
	@Transactional
	public void delBatch(String idsStr) {
		// 批量删除文章,和文章绑定关系的分类关系表
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
		.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		articaleMapper.delBatch(ids);
		articaleCategoryMapper.delBatch(ids);
		articaleUserMapper.delBatch(ids);
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
		articaleMapper.updateBatch(ids);
	}

	public PageResult<ArticaleDto> listByKeyWord(String keyword, PageParam param) {
		// 检查字段
		// 获得关键字过滤条件后的总数,关键字为空则是检索全部
		// 获得skip的数量
		// 获得文章和用户信息，根据关键字
		// 获得文章的分类信息
		// 计算最大页码
		// 处理合适的结构返回前端
		ValidatorUtil.check(param);
		Long total = articaleMapper.countAllByKeyWord(keyword);
		param.buildSkip();
		List<Articale> data = articaleMapper.pageByKeyWord(keyword,param.getPageSize(),param.getSkip());
		List<Integer> ids = data.stream().map(item -> item.getId()).collect(Collectors.toList());
		for (int i = 0; i< ids.size();i++ ) {
			List<Category> cateList = categoryMapper.getArtCategoryListById(ids.get(i));
			data.get(i).setCategoryList(cateList);
		}
		PageModel pageModel = new PageModel(param.getPageSize(),param.getCurrentPage(),total,data.size());
		List<ArticaleDto> dtoData = data.stream().map(item -> 
		DtoUtil.adapt(new ArticaleDto(), item)
		).collect(Collectors.toList());
		dtoData.forEach(dto -> {
			List<String> cateNameList = dto.getCategoryList().stream().map(item -> item.getName()).collect(Collectors.toList());
			dto.setCategoryName(String.join(",", cateNameList));
			dto.setOperatorerName(dto.getUser().getUsername());
			dto.setTimeAgo(TimeAgoUtils.format(dto.getUpdateTime()));
			dto.formatTime();
		});
		return PageResult.<ArticaleDto>builder().data(dtoData).pageModel(pageModel).build();
	}
}
