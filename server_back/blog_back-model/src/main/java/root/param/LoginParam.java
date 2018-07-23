package root.param;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

/**
 * 登录参数接收
 * @author tuwq
 *
 */
@Setter
@Getter
public class LoginParam {
	
	@NotBlank(message = "用户名不可以为空")
	private String username;
	
	@NotBlank(message = "密码不可以为空")
	private String password;
}
