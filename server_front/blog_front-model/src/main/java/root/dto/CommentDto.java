package root.dto;

import lombok.Data;
import root.model.Comment;
import root.util.TimeUtil;


@Data
public class CommentDto extends Comment{
	
	// ..月,日前的时间格式
	private String timeAgo;
	
	private String createTimeString;
	
	private String updateTimeString;
	
	public void formatTime() {
		this.createTimeString = TimeUtil.format(this.getCreateTime().getTime());
		this.updateTimeString = TimeUtil.format(this.getUpdateTime().getTime());
	}
	
	public void formatNoSecondTime() {
		this.createTimeString = TimeUtil.formatNoSecond(this.getCreateTime().getTime());
		this.updateTimeString = TimeUtil.formatNoSecond(this.getUpdateTime().getTime());
	}
}
