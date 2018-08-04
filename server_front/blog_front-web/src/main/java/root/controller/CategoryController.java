package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.ArticaleDto;
import root.dto.ShowCategoryArticleDto;
import root.param.PageParam;
import root.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {

	@Resource
	private CategoryService categoryService;

	@GetMapping("/list")
	public PageResult<ArticaleDto> categoryList(PageParam param, @RequestParam("categoryId") Integer categoryId) {
		return categoryService.categoryList(param, categoryId);
	}

	@GetMapping("/praise/{quantity}")
	public JsonResult<List<ArticaleDto>> praise(@PathVariable("quantity") Integer quantity) {
		return categoryService.praise(quantity);
	}

	@GetMapping("/articaleCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryArticale(@PathVariable("quantity") Integer quantity) {
		return categoryService.categoryArticale(quantity);
	}

	@GetMapping("/tutorialCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryTutorial(@PathVariable("quantity") Integer quantity) {
		return categoryService.categoryTutorial(quantity);
	}

	@GetMapping("/shortCodeCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryShortCode(@PathVariable("quantity") Integer quantity) {
		return categoryService.categoryShortCode(quantity);
	}

	@GetMapping("/chatCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryChat(@PathVariable("quantity") Integer quantity) {
		return categoryService.categoryChat(quantity);
	}

	@GetMapping("/hotDiscuss/{quantity}")
	public JsonResult<ShowCategoryArticleDto> hotDiscuss(@PathVariable("quantity") Integer quantity) {
		return categoryService.hotDiscuss(quantity);
	}
}
