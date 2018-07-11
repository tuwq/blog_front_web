package root.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import root.constant.ResultCode;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParamExceptionResult {
	// 错误码
	private int code;
	
	// 错误字段
	private String fildName;
	
	// 错误原因
	private String fildValue;
	
	public static ParamExceptionResult error(String fildName, String fildValue) {
		return ParamExceptionResult.builder().fildName(fildName).fildValue(fildValue).code(ResultCode.PARAM_ERROR).build();
	}
	
}
