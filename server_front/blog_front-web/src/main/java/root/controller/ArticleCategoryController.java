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
import root.dto.ArticleDto;
import root.dto.ArticleCategoryDto;
import root.dto.ShowCategoryArticleDto;
import root.exception.CheckParamException;
import root.exception.NotFoundException;
import root.param.PageParam;
import root.service.ArticleCategoryService;

@RestController
@RequestMapping("/articleCategory")
public class ArticleCategoryController {

	@Resource
	private ArticleCategoryService articleCategoryService;
	
	@GetMapping("/list")
	public PageResult<ArticleDto> articleByArtilceTagId(PageParam param, @RequestParam("categoryId") String categoryId) {
		if (!StringUtils.isNumeric(categoryId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"分类不存在");
		}
		return articleCategoryService.categoryList(param, Integer.parseInt(categoryId));
	}
	
	@GetMapping("/all")
	public JsonResult<List<ArticleCategoryDto>> all() {
		return articleCategoryService.all();
	}

	@GetMapping("/artWeight/{quantity}")
	public JsonResult<List<ArticleDto>> weight(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.weight(Integer.parseInt(quantity));
	}
	
	@GetMapping("/praise/{quantity}")
	public JsonResult<List<ArticleDto>> praise(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.praise(Integer.parseInt(quantity));
	}
	
	@GetMapping("/newTime/{quantity}")
	public JsonResult<List<ArticleDto>> newTime(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.newTime(Integer.parseInt(quantity));
	}

	@GetMapping("/articaleCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryArticale(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.categoryArticale(Integer.parseInt(quantity));
	}

	@GetMapping("/nodeCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryNode(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.categoryNode(Integer.parseInt(quantity));
	}

	@GetMapping("/shortCodeCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryShortCode(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.categoryShortCode(Integer.parseInt(quantity));
	}

	@GetMapping("/chatCategory/{quantity}")
	public JsonResult<ShowCategoryArticleDto> categoryChat(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.categoryChat(Integer.parseInt(quantity));
	}

	@GetMapping("/hotDiscuss/{quantity}")
	public JsonResult<ShowCategoryArticleDto> hotDiscuss(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.hotDiscuss(Integer.parseInt(quantity));
	}

	@GetMapping("/randomArticle/{quantity}")
	public JsonResult<List<ArticleDto>> randomArticle(@PathVariable("quantity") String quantity) {
		if (!StringUtils.isNumeric(quantity)) {
			throw new CheckParamException("数量","未指定");
		}
		return articleCategoryService.randomArticle(Integer.parseInt(quantity));
	}
}
