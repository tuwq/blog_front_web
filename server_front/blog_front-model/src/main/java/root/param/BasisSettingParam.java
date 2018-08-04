package root.param;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BasisSettingParam {
	
	@NotBlank(message="昵称不可以为空")
	@Size(min=1,max=10,message="用户名长度在1-10之间")
	private String nickname;
	
	private String website;
	
	private String desc;
	
}
