package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.dto.ShowCategoryArticleDto;
import root.exception.CheckParamException;
import root.exception.NotFoundException;
import root.param.PageParam;
import root.service.ArticleCategoryService;

@RestController
@RequestMapping("/articleCategory")
public class ArticleCategoryController {

	@Resource
	private ArticleCategoryService categoryService;
	
	@GetMapping("/list")
	public PageResult<ArticaleDto> categoryList(PageParam param, @RequestParam("categoryId") String categoryId) {
		if (!StringUtils.isNumeric(categoryId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"分类不存在");
		}
		return categoryService.categoryList(param, Integer.parseInt(categoryId));
	}

	@GetMapping("/artWeight/{quantity}")
	public JsonResult<List<ArticaleDto>> weight(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.weight(Integer.parseInt(quantity));
	}
	
	@GetMapping("/praise/{quantity}")
	public JsonResult<List<ArticaleDto>> praise(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.praise(Integer.parseInt(quantity));
	}
	
	@GetMapping("/newTime/{quantity}")
	public JsonResult<List<ArticaleDto>> newTime(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.newTime(Integer.parseInt(quantity));
	}

	@GetMapping("/articaleCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryArticale(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.categoryArticale(Integer.parseInt(quantity));
	}

	@GetMapping("/nodeCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryNode(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.categoryNode(Integer.parseInt(quantity));
	}

	@GetMapping("/shortCodeCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryShortCode(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.categoryShortCode(Integer.parseInt(quantity));
	}

	@GetMapping("/chatCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryChat(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.categoryChat(Integer.parseInt(quantity));
	}

	@GetMapping("/hotDiscuss/{quantity}")
	public JsonResult<ShowCategoryArticleDto> hotDiscuss(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return categoryService.hotDiscuss(Integer.parseInt(quantity));
	}
}
