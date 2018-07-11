package root.dto;


import root.model.User;
import root.util.DtoUtil;

public class UserDto extends User{

	public static UserDto adapt(User user) {
		return DtoUtil.adapt(new UserDto(), user);
	}
}
