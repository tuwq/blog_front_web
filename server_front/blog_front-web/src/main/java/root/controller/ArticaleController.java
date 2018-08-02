package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.ArticaleDto;
import root.dto.ShowArticleDto;
import root.service.ArticaleService;

@RestController
@RequestMapping("/articale")
public class ArticaleController {
	
	@Resource
	private ArticaleService articaleService;
	
	@GetMapping("/praise/{quantity}")
	public JsonResult<List<ArticaleDto>> praise(@PathVariable("quantity") Integer quantity) {
		return articaleService.praise(quantity);
	}
	
	@GetMapping("/articaleCategory/{quantity}")
	public JsonResult<ShowArticleDto> categoryArticale(@PathVariable("quantity") Integer quantity) {
		return articaleService.categoryArticale(quantity);
	}
	
	@GetMapping("/tutorialCategory/{quantity}")
	public JsonResult<ShowArticleDto> categoryTutorial(@PathVariable("quantity") Integer quantity) {
		return articaleService.categoryTutorial(quantity);
	}
	
	@GetMapping("/shortCodeCategory/{quantity}")
	public JsonResult<ShowArticleDto> categoryShortCode(@PathVariable("quantity") Integer quantity) {
		return articaleService.categoryShortCode(quantity);
	}
	
	@GetMapping("/chatCategory/{quantity}")
	public JsonResult<ShowArticleDto> categoryChat(@PathVariable("quantity") Integer quantity) {
		return articaleService.categoryChat(quantity);
	}
	
	@GetMapping("/hotDiscuss/{quantity}")
	public JsonResult<ShowArticleDto> hotDiscuss(@PathVariable("quantity") Integer quantity) {
		return articaleService.hotDiscuss(quantity);
	}
}
