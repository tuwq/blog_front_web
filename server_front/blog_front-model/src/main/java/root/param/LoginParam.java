package root.param;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginParam {

	@NotBlank(message="登录账户不能为空")
	private String loginname; 
	@NotBlank(message="密码不能为空")
	private String password;
}
