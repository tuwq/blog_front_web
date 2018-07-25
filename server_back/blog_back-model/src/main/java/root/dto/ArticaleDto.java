package root.dto;

import java.util.List;

import lombok.Data;
import root.model.Articale;
import root.util.TimeUtil;

@Data
public class ArticaleDto extends Articale{
	// 分类
	private String categoryName;
	// 分类id数组
	private List<Integer> categoryIds;
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
