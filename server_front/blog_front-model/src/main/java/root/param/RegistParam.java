package root.param;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegistParam {
	
	@NotBlank(message = "用户名不可以为空")
	private String username;
	
	@NotBlank(message = "密码不可以为空")
	private String password;
	
	@NotBlank(message = "邮箱不可以为空")
	private String email;
}
