package root.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentExceptionResult {

	// 错误状态码
	private int code;
	// 错误信息
	private String msg;
	
	public static CommentExceptionResult error(int code,String msg) {
		return CommentExceptionResult.builder().code(code).msg(msg).build();
	}
}
