package root.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.collect.Lists;

import root.beans.ImgNode;
import root.beans.ImgURIResult;
import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.exception.LoginTokenException;
import root.mapper.ArticaleCategoryMapper;
import root.mapper.ArticaleMapper;
import root.model.Articale;
import root.model.ArticaleCategory;
import root.param.ArticleParam;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.ValidatorUtil;

@Service
public class ArticleService {
	
	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private ArticaleCategoryMapper articaleCategoryMapper;
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
		int articaleId = articaleMapper.insertSelective(articale);
		List<ArticaleCategory> collect = param.getCategoryNames().stream().map( categoryId -> 
			 ArticaleCategory.builder()
			.articaleId(articaleId)
			.categoryId(categoryId)
			.build()
		).collect(Collectors.toList());
		articaleCategoryMapper.insertBatch(collect);
	}
	
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
		// 获得数据
		// 计算最大页码返回页面
		// 转换dto返回
		ValidatorUtil.check(param);
		Long total = articaleMapper.countAll();
		param.buildSkip();
		List<Articale> data = articaleMapper.page(param.getPageSize(),param.getSkip());
		PageModel pageModel = new PageModel(param.getPageSize(),param.getCurrenPage(),total,data.size());
		List<ArticaleDto> dtoData = data.stream().map(item -> 
			DtoUtil.adapt(new ArticaleDto(), item)
		).collect(Collectors.toList());
		return PageResult.<ArticaleDto>builder().data(dtoData).pageModel(pageModel).build();
	}
}
