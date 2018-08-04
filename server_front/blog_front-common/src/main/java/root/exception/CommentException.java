package root.exception;

// 评论相关异常
public class CommentException extends RuntimeException implements WebException{

	private int ResultCode;
	
	private String msg;
	
	public CommentException(int ResultCode,String msg) {
		this.ResultCode = ResultCode;
		this.msg = msg;
	}
	
	public int getResultCode() {
		return ResultCode;
	}
	public String getMsg() {
		return msg;
	}
	
	public CommentException() {
		super();
	}

	public CommentException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public CommentException(String message, Throwable cause) {
		super(message, cause);
	}

	public CommentException(String message) {
		super(message);
	}

	public CommentException(Throwable cause) {
		super(cause);
	}
	
}
