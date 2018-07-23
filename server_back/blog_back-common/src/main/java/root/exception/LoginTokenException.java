package root.exception;

// LOGIN_TOKEN过期或伪造
public class LoginTokenException extends RuntimeException implements WebException{

	
	public LoginTokenException() {
		super();
	}

	public LoginTokenException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public LoginTokenException(String message, Throwable cause) {
		super(message, cause);
	}

	public LoginTokenException(String message) {
		super(message);
	}

	public LoginTokenException(Throwable cause) {
		super(cause);
	}
}
