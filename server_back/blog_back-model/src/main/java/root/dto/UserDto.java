package root.dto;

import lombok.Data;
import root.model.User;
import root.util.TimeUtil;

@Data
public class UserDto extends User{
		
	private String createTimeString;
	
	public void formatTime() {
		this.createTimeString = TimeUtil.format(this.getCreateTime().getTime());
	}
	
	public void formatNoSecondTime() {
		this.createTimeString = TimeUtil.formatNoSecond(this.getCreateTime().getTime());
	}
}
