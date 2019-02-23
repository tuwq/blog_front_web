package root.dto;

import java.util.List;

import lombok.Data;
import root.model.Article;
import root.model.ArticleCategory;
import root.util.TimeUtil;

@Data
public class ArticleDto extends Article {
	// 分类
	private String categoryName;
	// 分类id数组
	private List<Integer> articleCategoryIds;
	// 标签id数组
	private List<Integer> articleTagIds;
	// 分类数据
	private List<ArticleCategory> articleCategoryList;
	// 操作人名
	private String operatorerName;
	// ..日前的时间格式
	private String TimeAgo;
	
	private String createTimeString;
	
	private String updateTimeString;
	
	public void formatTime() {
		this.createTimeString = TimeUtil.format(this.getCreateTime().getTime());
		this.updateTimeString = TimeUtil.format(this.getUpdateTime().getTime());
	}
}
