package root.param;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class CommentParam {

	@NotNull(message="文章id不能为空")
	private Integer articleId;
	@NotBlank(message="文章内容不能为空")
	@Size(min=5,max=100,message="内容范围应该在5-100之间")
	private String content;
}
