package root.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticleDto;
import root.exception.NotFoundException;
import root.model.Article;
import root.model.ArticleTag;
import root.model.Song;
import root.param.PageParam;
import root.service.ArticleTagService;

@RestController
@RequestMapping("/articleTag")
public class ArticleTagController {
	
	@Autowired
	private ArticleTagService articleTagService;
	
	@GetMapping("/all")
	public JsonResult<List<ArticleTag>> all() {
		List<ArticleTag> articleTagList = this.articleTagService.all();
		return JsonResult.<List<ArticleTag>>success(articleTagList);
	}
	
	@GetMapping("/pageArticleByArticleTag")
	public PageResult<ArticleDto> pageArticleByArticleTag(PageParam param, @RequestParam("articleTagId") String articleTagId) {
		if (!StringUtils.isNumeric(articleTagId)) {throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"标签不存在");}
		return this.articleTagService.pageArticleByArticleTag(param, Integer.parseInt(articleTagId));
	}
}
