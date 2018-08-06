package root.dto;

import lombok.Data;
import root.model.User;

@Data
public class UserDto extends User {
	
	// 新的动态消息数
	private Long newDynamicReceiveSum;
	
}
