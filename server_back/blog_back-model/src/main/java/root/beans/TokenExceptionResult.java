package root.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// TOKEN受检异常
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TokenExceptionResult {
	
	// 错误状态码
	private int code;
	// 错误信息
	private String msg;
	
	public static TokenExceptionResult errror(int code,String message) {
		return TokenExceptionResult.builder().code(code).msg(message).build();
	}
}
