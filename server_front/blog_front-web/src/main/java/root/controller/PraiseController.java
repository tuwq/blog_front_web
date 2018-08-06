package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.async.IncrDataHandler;
import root.beans.JsonResult;

@RestController
@RequestMapping("/praise")
public class PraiseController {

	@Resource
	private IncrDataHandler incrDataHandler;
	
	@PutMapping("/articleIncr/{articleId}")
	public JsonResult<Void> articleIncr(@PathVariable("articleId") Integer articleId) {
		incrDataHandler.articlePraiseIncr(articleId);
		return JsonResult.<Void>success();
	}
}
