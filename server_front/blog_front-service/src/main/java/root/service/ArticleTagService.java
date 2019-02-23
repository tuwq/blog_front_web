package root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.dto.ArticleDto;
import root.exception.CheckParamException;
import root.mapper.ArticleMapper;
import root.mapper.ArticleTagMapper;
import root.model.Article;
import root.model.ArticleTag;
import root.model.Song;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class ArticleTagService {

	@Autowired
	private ArticleTagMapper articleTagMapper;
	@Autowired
	private ArticleMapper articleMapper;
	
	/**
	 * 全部标签信息
	 */
	public List<ArticleTag> all() {
		return this.articleTagMapper.all();
	}

	/**
	 * 标签下的所有文章
	 * @param param 
	 */
	public PageResult<ArticleDto> pageArticleByArticleTag(PageParam param, Integer articleTagId) {
		ValidatorUtil.check(param);
		Long total = articleMapper.countByArticleTag(articleTagId);
		if (total == 0) {
			return PageResult.<ArticleDto>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Article> list = this.articleMapper.pageArticleByArticleTagId(param.getSkip(), param.getPageSize(), articleTagId);
		List<ArticleDto> data = new ArrayList<ArticleDto>();
		list.forEach(item -> {
			ArticleDto dto = DtoUtil.adapt(new ArticleDto(), item);
			dto.setTimeAgo(TimeAgoUtils.format(dto.getCreateTime()));
			dto.formatNoSecondTime();
			data.add(dto);
		});
		ArticleTag articleTag = this.articleTagMapper.selectByPrimaryKey(articleTagId);
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<ArticleDto>builder().pageModel(pageModel).data(data).code(200).articleTag(articleTag).build();
	}

}
