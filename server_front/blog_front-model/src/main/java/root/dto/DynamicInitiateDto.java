package root.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import root.model.UserInitiateDynamic;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
public class DynamicInitiateDto {
	// 动态信息
	private UserInitiateDynamic userInitiateDynamic;
	// 动态的文章信息
	private ArticaleDto articaleDto;
	// 动态的评论信息
	private CommentDto commentDto;
}
