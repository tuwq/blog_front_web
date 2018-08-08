package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.CategoryDto;
import root.service.CategoryService;

@RestController
@RequestMapping("/sys/category")
public class CategoryController {

	@Resource
	private CategoryService categoryService;
	
	@GetMapping("/info")
	public JsonResult<List<CategoryDto>> info() {
		return categoryService.info();
	}
	
}
