package root.exception;

// 激活校验异常
public class ActivationException extends RuntimeException implements WebException{

	public ActivationException() {
		super();
	}

	public ActivationException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public ActivationException(String message, Throwable cause) {
		super(message, cause);
	}

	public ActivationException(String message) {
		super(message);
	}

	public ActivationException(Throwable cause) {
		super(cause);
	}

}
