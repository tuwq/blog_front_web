package root.param;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class FirendParam {
	
	@NotNull
	private Integer id;
	
	@NotBlank
	private String nickname;
	
	@NotBlank
	private String desc;
	
	@NotBlank
	private String website;
}
