package root.param;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BasisSettingParam {
	
	@NotBlank(message="昵称不可以为空")
	private String nickname;
	
	private String website;
	
	private String desc;
	
}
