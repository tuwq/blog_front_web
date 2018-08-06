package root.param;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UpdatePassParam {
	
	@NotBlank(message="密钥不能为空")
	private String key;
	@NotBlank(message="密码不能为空")
	private String password;
	@NotBlank(message="密码不能为空")
	private String rePassword;
}
