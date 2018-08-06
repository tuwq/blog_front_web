package root.exception;

// 动态相关异常
public class DynamicException extends RuntimeException implements WebException{

	private int ResultCode;
	
	private String msg;
	
	public DynamicException(int ResultCode,String msg) {
		this.ResultCode = ResultCode;
		this.msg = msg;
	}
	
	public int getResultCode() {
		return ResultCode;
	}
	public String getMsg() {
		return msg;
	}
	
	public DynamicException() {
		super();
	}

	public DynamicException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public DynamicException(String message, Throwable cause) {
		super(message, cause);
	}

	public DynamicException(String message) {
		super(message);
	}

	public DynamicException(Throwable cause) {
		super(cause);
	}
	
}
