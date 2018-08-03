package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.dto.ArticaleDto;
import root.dto.ShowArticleDto;
import root.exception.CheckParamException;
import root.mapper.ArticaleMapper;
import root.mapper.CategoryMapper;
import root.model.Articale;
import root.model.Category;
import root.util.DtoUtil;
import root.util.TimeAgoUtils;

@Service
public class ArticaleService {

	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private CategoryMapper categoryMapper;
	@Value("${categoryArticleId}")
	private Integer categoryArticleId;
	@Value("${categoryTutorialId}")
	private Integer categoryTutorialId;
	@Value("${categoryShortCodeId}")
	private Integer categoryShortCodeId;
	@Value("${categoryChatId}")
	private Integer categoryChatId;
	
	
	
	public JsonResult<List<ArticaleDto>> praise(Integer quantity) {
		// 根据集体点赞数和更新时间获取指定数量文章数据
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		List<Articale> praiseList = articaleMapper.praiseByQuantity(quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		praiseList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		return JsonResult.<List<ArticaleDto>>success(articaleDtoList);
	}

	public JsonResult<ShowArticleDto> categoryArticale(Integer quantity) {
		// 根据集体点赞数和更新时间获得指定数量的分类文章的文章
		// 查找分类名称
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(categoryArticleId,quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(categoryArticleId);
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowArticleDto showArticleDto = ShowArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		return JsonResult.<ShowArticleDto>success(showArticleDto);
	}

	public JsonResult<ShowArticleDto> categoryTutorial(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(categoryTutorialId,quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(categoryTutorialId);
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowArticleDto showArticleDto = ShowArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		return JsonResult.<ShowArticleDto>success(showArticleDto);
	}
	
	public JsonResult<ShowArticleDto> categoryShortCode(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(categoryShortCodeId,quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(categoryShortCodeId);
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowArticleDto showArticleDto = ShowArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		return JsonResult.<ShowArticleDto>success(showArticleDto);
	}

	public JsonResult<ShowArticleDto> categoryChat(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
		}
		List<Articale> articaleList = articaleMapper.categoryArticale(categoryChatId,quantity);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		Category category = categoryMapper.selectByPrimaryKey(categoryChatId);
		if (category == null) {
			throw new CheckParamException("分类","不存在");
		}
		ShowArticleDto showArticleDto = ShowArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		return JsonResult.<ShowArticleDto>success(showArticleDto);
	}

	public JsonResult<ShowArticleDto> hotDiscuss(Integer quantity) {
		if (quantity == null) {
			throw new CheckParamException("数量","未指定");
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
		ShowArticleDto showArticleDto = ShowArticleDto.builder().category(category).articaleList(articaleDtoList).build();
		return JsonResult.<ShowArticleDto>success(showArticleDto);
	}
}
