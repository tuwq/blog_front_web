package root.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SearchNoResultExceptionResult {
	// 错误状态码
	private int code;
	// 错误信息
	private String msg;
	
	public static SearchNoResultExceptionResult error(int code,String msg) {
		return SearchNoResultExceptionResult.builder().code(code).msg(msg).build();
	}
}