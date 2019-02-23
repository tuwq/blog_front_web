package root.dto;

import java.util.List;

import lombok.Data;
import root.model.Article;
import root.model.ArticleCategory;
import root.model.ArticleTag;
import root.util.TimeUtil;

@Data
public class ArticleDto extends Article {
	
	// 分类
	private String articleCategoryName;
	// 分类id数组
	private List<Integer> categoryIds;
	// 操作人名
	private String operatorerName;
	// ..月,日前的时间格式
	private String timeAgo;
	// 上一篇文章
	private Article prev;
	// 下一篇文章
	private Article next;
	
	private String createTimeString;
	
	private String updateTimeString;
	// 年份
	private String yearString;
	// 月份
	private String monthString;
	// 日份
	private String dayString;
	
	List<ArticleCategory> articleCategoryList;
	
	List<ArticleTag> articleTagList;
	
	public void formatTime() {
		this.createTimeString = TimeUtil.format(this.getCreateTime().getTime());
		this.updateTimeString = TimeUtil.format(this.getUpdateTime().getTime());
	}
	
	public void formatNoSecondTime() {
		this.createTimeString = TimeUtil.formatNoSecond(this.getCreateTime().getTime());
		this.updateTimeString = TimeUtil.formatNoSecond(this.getUpdateTime().getTime());
	}
	
}
