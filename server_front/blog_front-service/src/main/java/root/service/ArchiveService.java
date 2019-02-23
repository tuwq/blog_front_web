package root.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.dto.ArticleDto;
import root.mapper.ArticleCategoryMapper;
import root.mapper.ArticleMapper;
import root.mapper.ArticleTagMapper;
import root.model.Article;
import root.model.ArticleTag;
import root.model.ArticleCategory;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.SortUtil;
import root.util.TimeUtil;
import root.util.ValidatorUtil;

@Service
public class ArchiveService {
	
	@Autowired
	private ArticleMapper articleMapper;
	@Autowired
	private ArticleCategoryMapper articleCategoryMapper;
	@Autowired
	private ArticleTagMapper articleTagMapper;
	
	/**
	 * 时间归档
	 * 文章信息
	 * 文章标签信息
	 * 文章分类信息
	 * 已时间格式返回Map<String, List<ArticleDto>>
	 */
	public PageResult<ArticleDto> createTime(PageParam param) {
		ValidatorUtil.check(param);
		Long total = this.articleMapper.countAll();
		if (total == 0) {
			return PageResult.<ArticleDto>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Article> list = this.articleMapper.pageAllByCreateTime(param.getSkip(), param.getPageSize());
		// ArrayListMultimap<String, ArticleDto> data = ArrayListMultimap.<String, ArticleDto>create();
		Map<String, List<ArticleDto>> data = new HashMap<String, List<ArticleDto>>();
		list.stream().forEach( item -> {
			ArticleDto dto = DtoUtil.adapt(new ArticleDto(), item);
			List<ArticleCategory> articleCategoryList = this.articleCategoryMapper.getArtCategoryListById(dto.getId());
			List<ArticleTag> articleTagList = this.articleTagMapper.getArticleTagListByArticleId(dto.getId());
			dto.setArticleCategoryList(articleCategoryList);
			dto.setArticleTagList(articleTagList);
			String yearByTimeStamp = TimeUtil.getYearByTimeStamp(dto.getCreateTime());
			dto.setYearString(yearByTimeStamp);
			dto.setMonthString(TimeUtil.getMonthByDate(dto.getCreateTime()));
			dto.setDayString(TimeUtil.getDayOfMonth(dto.getCreateTime()));
			List<ArticleDto> yearList = data.get(yearByTimeStamp);
			if (yearList == null) {
				yearList = new ArrayList<ArticleDto>();
				yearList.add(dto);
			} else {
				yearList.add(dto);
			}
			data.put(yearByTimeStamp, yearList);
		});
		PageModel pageModel = new PageModel(total,list.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<ArticleDto>builder().pageModel(pageModel).mapData(data).code(200).build();
	}

}
