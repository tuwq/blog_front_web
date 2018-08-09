package root.dto;

import lombok.Data;
import root.model.Comment;
import root.model.User;
import root.util.TimeUtil;


@Data
public class CommentDto extends Comment{
	
	// 父评论的用户信息
	private User parentUser;
	// 根评论的信息
	private CommentDto rootComment;
	// 是否是根评论且根评论下有子评论,0:没有,1:有
	private Integer hasChild;
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
