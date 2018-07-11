package root.exception;

import lombok.Data;

@Data
public class CheckParamException extends RuntimeException implements WebException{

	private static final long serialVersionUID = 1L;

	// 出错字段的名字
	private String fieldName;
	// 出错字段的值
	private String fieldValue;
	
	// 自定义方便返回异常切面的构造
	public CheckParamException(String fieldName, String fieldValue) {
		super();
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	public CheckParamException() {
		super();
	}
	public CheckParamException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}
	public CheckParamException(String message, Throwable cause) {
		super(message, cause);
	}
	public CheckParamException(String message) {
		super(message);
	}
	public CheckParamException(Throwable cause) {
		super(cause);
	}
	
}
