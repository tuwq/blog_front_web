package root.exception;

// token校验异常
public class TokenException extends RuntimeException implements WebException{

	
	private int ResultCode;
	
	private String msg;
	
	
	public TokenException(int ResultCode,String msg) {
		this.ResultCode = ResultCode;
		this.msg = msg;
	}
	
	public int getResultCode() {
		return ResultCode;
	}
	public String getMsg() {
		return msg;
	}

	public TokenException() {
		super();
	}

	public TokenException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public TokenException(String message, Throwable cause) {
		super(message, cause);
	}

	public TokenException(String message) {
		super(message);
	}

	public TokenException(Throwable cause) {
		super(cause);
	}
	
}
