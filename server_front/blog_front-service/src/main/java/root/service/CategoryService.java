package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import root.beans.JsonResult;
import root.beans.PageModel;
import root.beans.PageResult;
import root.configConstant.BlogConfigProperties;
import root.constant.RedisCode;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.dto.ShowCategoryArticleDto;
import root.exception.CheckParamException;
import root.exception.NotFoundException;
import root.mapper.ArticaleMapper;
import root.mapper.CategoryMapper;
import root.model.Articale;
import root.model.Category;
import root.param.PageParam;
import root.redis.RedisOperator;
import root.util.DtoUtil;
import root.util.JsonUtils;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class CategoryService {

	@Resource
	private CategoryMapper categoryMapper;
	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private BlogConfigProperties blogConfigProperties;
	@Resource
	private RedisOperator redis;
	
	public PageResult<ArticaleDto> categoryList(PageParam param, Integer id) {
		// 检查字段
		// 分类id的分类是否存在，不存在返回404
		// 分类id下的所有文章总数
		// 生成skip
		// 获得指定数量的文章和每篇文章的用户信息
		// 获得分类信息
		// 生成分页返回数据
		ValidatorUtil.check(param);
		if (id == null) {
			throw new CheckParamException("分类Id","为空");
		}
		int count = categoryMapper.countById(id);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"分类不存在");
		}
		Category category = categoryMapper.selectByPrimaryKey(id);
		Long total = articaleMapper.countAllByCategoryId(id);
		if(total == 0) {
			return PageResult.<ArticaleDto>builder().data(Lists.newArrayList()).pageModel(new PageModel()).code(200).build();
		}
		param.buildSkip();
		List<Articale> articaleList = articaleMapper.categoryPage(param.getSkip(),param.getPageSize(),id);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getCreateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		PageModel pageModel = new PageModel(total,articaleDtoList.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<ArticaleDto>builder().category(category).pageModel(pageModel).code(200).data(articaleDtoList).build();
	}
	
	public JsonResult<List<ArticaleDto>> praise(Integer quantity) {
		// 根据集体点赞数和更新时间获取指定数量文章数据
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheList = redis.get(RedisCode.ARTICLE_LIST_PRAISE_CACHE);
		if (cacheList != null) {
			return JsonResult.<List<ArticaleDto>>success(JsonUtils.jsonToList(cacheList, ArticaleDto.class));
		}
		List<Articale> praiseList = articaleMapper.praiseByQuantity(quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		praiseList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		redis.set(RedisCode.ARTICLE_LIST_PRAISE_CACHE, JsonUtils.objectToJson(articaleDtoList),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<List<ArticaleDto>>success(articaleDtoList);
	}

	public JsonResult<ShowCategoryArticleDto> categoryArticale(Integer quantity) {
		// 根据集体点赞数和更新时间获得指定数量的分类文章的文章
		// 查找分类名称
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheDto = redis.get(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getArticleId());
		if (cacheDto != null) {
			return JsonResult.<ShowCategoryArticleDto>success(JsonUtils.jsonToPojo(cacheDto, ShowCategoryArticleDto.class));
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(blogConfigProperties.getCategory().getArticleId(),quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(blogConfigProperties.getCategory().getArticleId());
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowCategoryArticleDto showCADto = ShowCategoryArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		redis.set(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getArticleId(), JsonUtils.objectToJson(showCADto),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<ShowCategoryArticleDto>success(showCADto);
	}

	public JsonResult<ShowCategoryArticleDto> categoryNode(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheDto = redis.get(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getNodeId());
		if (cacheDto != null) {
			return JsonResult.<ShowCategoryArticleDto>success(JsonUtils.jsonToPojo(cacheDto, ShowCategoryArticleDto.class));
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(blogConfigProperties.getCategory().getNodeId(),quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(blogConfigProperties.getCategory().getNodeId());
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowCategoryArticleDto showCADto = ShowCategoryArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		redis.set(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getNodeId(), JsonUtils.objectToJson(showCADto),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<ShowCategoryArticleDto>success(showCADto);
	}
	
	public JsonResult<ShowCategoryArticleDto> categoryShortCode(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheDto = redis.get(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getShortCodeId());
		if (cacheDto != null) {
			return JsonResult.<ShowCategoryArticleDto>success(JsonUtils.jsonToPojo(cacheDto, ShowCategoryArticleDto.class));
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(blogConfigProperties.getCategory().getShortCodeId(),quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(blogConfigProperties.getCategory().getShortCodeId());
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowCategoryArticleDto showCADto = ShowCategoryArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		redis.set(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getShortCodeId(), JsonUtils.objectToJson(showCADto),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<ShowCategoryArticleDto>success(showCADto);
	}

	public JsonResult<ShowCategoryArticleDto> categoryChat(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheDto = redis.get(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getChatId());
		if (cacheDto != null) {
			return JsonResult.<ShowCategoryArticleDto>success(JsonUtils.jsonToPojo(cacheDto, ShowCategoryArticleDto.class));
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(blogConfigProperties.getCategory().getChatId(),quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(blogConfigProperties.getCategory().getChatId());
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowCategoryArticleDto showCADto = ShowCategoryArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		redis.set(RedisCode.ARTICLE_CATEGORY_CACHE+":"+blogConfigProperties.getCategory().getChatId(), JsonUtils.objectToJson(showCADto),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<ShowCategoryArticleDto>success(showCADto);
	}

	public JsonResult<ShowCategoryArticleDto> hotDiscuss(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheDto = redis.get(RedisCode.ARTICLE_LIST_COMMENT_CACHE);
		if (cacheDto != null) {
			return JsonResult.<ShowCategoryArticleDto>success(JsonUtils.jsonToPojo(cacheDto, ShowCategoryArticleDto.class));
		}
		List<Articale> articaleList = articaleMapper.hotDiscuss(quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = new Category();category.setName("热评文章");
		ShowCategoryArticleDto showCADto = ShowCategoryArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		redis.set(RedisCode.ARTICLE_LIST_COMMENT_CACHE, JsonUtils.objectToJson(showCADto),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<ShowCategoryArticleDto>success(showCADto);
	}

	public JsonResult<List<ArticaleDto>> weight(Integer quantity) {
		// 根据权重和更新时间
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		String cacheDtoList = redis.get(RedisCode.ARTICLE_LIST_WEIGHT_CACHE);
		if (cacheDtoList != null) {
			return JsonResult.<List<ArticaleDto>>success(JsonUtils.jsonToList(cacheDtoList, ArticaleDto.class));
		}
		List<Articale> praiseList = articaleMapper.weightByQuantity(quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		praiseList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		redis.set(RedisCode.ARTICLE_LIST_WEIGHT_CACHE, JsonUtils.objectToJson(articaleDtoList),blogConfigProperties.getCache().getArticleListIndexTimeout());
		return JsonResult.<List<ArticaleDto>>success(articaleDtoList);
	}

	public JsonResult<List<ArticaleDto>> newTime(Integer quantity) {
		// 根据创建时间
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		List<Articale> praiseList = articaleMapper.createTimeByQuantity(quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		praiseList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		return JsonResult.<List<ArticaleDto>>success(articaleDtoList);
	}
}
