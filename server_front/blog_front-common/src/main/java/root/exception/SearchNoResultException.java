package root.exception;

// 搜索无结果异常
public class SearchNoResultException extends RuntimeException implements WebException{

	private int ResultCode;
	
	private String msg;
	
	
	public SearchNoResultException(int ResultCode,String msg) {
		this.ResultCode = ResultCode;
		this.msg = msg;
	}
	
	public int getResultCode() {
		return ResultCode;
	}
	public String getMsg() {
		return msg;
	}
	
	public SearchNoResultException() {
		super();
	}

	public SearchNoResultException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public SearchNoResultException(String message, Throwable cause) {
		super(message, cause);
	}

	public SearchNoResultException(String message) {
		super(message);
	}

	public SearchNoResultException(Throwable cause) {
		super(cause);
	}
		
}
