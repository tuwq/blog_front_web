package root.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DynamicExceptionResult {
	
	// 错误状态码
	private int code;
	// 错误信息
	private String msg;
	
	public static DynamicExceptionResult error(int code,String msg) {
		return DynamicExceptionResult.builder().code(code).msg(msg).build();
	}
}
