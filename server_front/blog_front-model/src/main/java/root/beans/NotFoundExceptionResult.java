package root.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NotFoundExceptionResult {
	// 错误状态码
	private int code;
	// 错误信息
	private String msg;
	
	public static NotFoundExceptionResult error(int code,String msg) {
		return NotFoundExceptionResult.builder().code(code).msg(msg).build();
	}
}
