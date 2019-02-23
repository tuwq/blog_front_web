package root.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.mapper.ArticleTagMapper;
import root.model.ArticleTag;

@Service
public class ArticleTagService {

	@Autowired
	private ArticleTagMapper articleTagMapper;
	
	public JsonResult<List<ArticleTag>> all() {
		List<ArticleTag> articleTagList = this.articleTagMapper.findAll();
		return JsonResult.<List<ArticleTag>>success(articleTagList);
	}

}
