package root.param;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SecuritySettingParam {
	
	@NotBlank(message="邮箱不能为空")
	private String email;
	
	@NotBlank(message="密码不能为空")
	private String password;
	
	@NotBlank(message="密码不能为空")
	private String repassword;
}
