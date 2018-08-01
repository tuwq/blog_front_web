package root.param;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class FollowParam {

	@NotNull(message="关注目标不存在")
	private Integer followId;
	
	// 1.关注,2.不关注
	@NotNull(message="关注类型不存在")
	private Integer followAction;
}
