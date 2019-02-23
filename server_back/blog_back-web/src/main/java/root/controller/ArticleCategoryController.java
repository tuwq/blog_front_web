package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.ArticleCategoryDto;
import root.service.ArticleCategoryService;

@RestController
@RequestMapping("/sys/articleCategory")
public class ArticleCategoryController {

	@Resource
	private ArticleCategoryService articleCategoryService;
	
	@GetMapping("/all")
	public JsonResult<List<ArticleCategoryDto>> all() {
		return articleCategoryService.all();
	}
	
}
