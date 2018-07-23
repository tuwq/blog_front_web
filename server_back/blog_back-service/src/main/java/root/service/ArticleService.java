package root.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import root.mapper.ArticaleCategoryMapper;
import root.mapper.ArticaleMapper;
import root.model.Articale;
import root.model.ArticaleCategory;
import root.model.Category;
import root.param.ArticleParam;
import root.util.DefaultValueUtil;
import root.util.ThreadUtil;
import root.util.ValidatorUtil;

@Service
public class ArticleService {
	
	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private ArticaleCategoryMapper articaleCategoryMapper;
	@Resource
	private TokenService tokenService;
	
	public void add(ArticleParam param) {
		// 检查字段
		// 检查token
		// 创建文章对象
		// TODO 数据库分类表，用户表需要更新文章数量,rabbitmq
		// 创建文章分类关系对象
		// 插入
		ValidatorUtil.check(param);
		Integer userId = tokenService.checkToken();
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
}
