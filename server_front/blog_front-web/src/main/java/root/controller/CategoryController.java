package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.dto.ArticaleDto;
import root.param.PageParam;
import root.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {

	@Resource
	private CategoryService categoryService;
	
	@GetMapping("/list")
	public PageResult<ArticaleDto> categoryList(PageParam param,@RequestParam("categoryId") Integer categoryId) {
		return categoryService.categoryList(param,categoryId);
	}
}
