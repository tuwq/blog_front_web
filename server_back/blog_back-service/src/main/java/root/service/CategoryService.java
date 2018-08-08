package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.dto.CategoryDto;
import root.mapper.CategoryMapper;
import root.model.Category;
import root.util.DtoUtil;

@Service
public class CategoryService {

	@Resource
	private CategoryMapper categoryMapper;
	
	public JsonResult<List<CategoryDto>> info() {
		List<Category> data = categoryMapper.getAll();
		List<CategoryDto> categoryDtos = data.stream().map(item -> DtoUtil.adapt(new CategoryDto(), item)).collect(Collectors.toList());
		return JsonResult.<List<CategoryDto>>success(categoryDtos);
	}

}
