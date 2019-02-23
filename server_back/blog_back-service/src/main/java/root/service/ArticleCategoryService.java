package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.dto.ArticleCategoryDto;
import root.mapper.ArticleCategoryMapper;
import root.model.ArticleCategory;
import root.util.DtoUtil;

@Service
public class ArticleCategoryService {

	@Resource
	private ArticleCategoryMapper articleCategoryMapper;
	
	public JsonResult<List<ArticleCategoryDto>> all() {
		List<ArticleCategory> data = articleCategoryMapper.getAll();
		List<ArticleCategoryDto> categoryDtos = data.stream().map(item -> DtoUtil.adapt(new ArticleCategoryDto(), item)).collect(Collectors.toList());
		return JsonResult.<List<ArticleCategoryDto>>success(categoryDtos);
	}

}
