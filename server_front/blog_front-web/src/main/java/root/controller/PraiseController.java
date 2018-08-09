package root.controller;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.async.IncrDataHandler;
import root.beans.JsonResult;
import root.constant.ResultCode;
import root.exception.NotFoundException;

@RestController
@RequestMapping("/praise")
public class PraiseController {

	@Resource
	private IncrDataHandler incrDataHandler;
	
	@PutMapping("/articleIncr/{articleId}")
	public JsonResult<Void> articleIncr(@PathVariable("articleId") String articleId) {
		if(!StringUtils.isNumeric(articleId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"文章未找到");
		}
		incrDataHandler.articlePraiseIncr(Integer.parseInt(articleId));
		return JsonResult.<Void>success();
	}
}
