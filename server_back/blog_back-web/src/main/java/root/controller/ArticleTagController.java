package root.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.ArticleCategoryDto;
import root.model.ArticleTag;
import root.service.ArticleTagService;

@RestController
@RequestMapping("/sys/articleTag")
public class ArticleTagController {
	
	@Autowired
	private ArticleTagService articleTagService;
	
	@GetMapping("/all")
	public JsonResult<List<ArticleTag>> all() {
		return articleTagService.all();
	}
}
