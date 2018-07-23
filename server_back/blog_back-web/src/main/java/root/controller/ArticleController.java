package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.param.ArticleParam;
import root.service.ArticleService;

@RestController
@RequestMapping("/sys/article")
public class ArticleController {
	
	@Resource
	private ArticleService articleService;
	
	@PostMapping("/add")
	public JsonResult<Void> add(@RequestBody ArticleParam param) {
		articleService.add(param);
		return JsonResult.<Void>success();
	}
}
