package root.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import root.beans.ParamExceptionResult;
import root.beans.TokenExceptionResult;
import root.constant.ResultCode;
import root.exception.CheckParamException;
import root.exception.LoginTokenException;

@ControllerAdvice
public class ExceptionAdvice {
	
	// 检查参数出错的异常
	@ExceptionHandler(CheckParamException.class)
	public ResponseEntity<ParamExceptionResult> handleBindException(CheckParamException e) {
		// TODO 记录异常日志
		return new ResponseEntity<ParamExceptionResult>(ParamExceptionResult.error(e.getFieldName(),e.getFieldValue()),HttpStatus.OK);
	}
	
	// 检查LOGIN_TOKEN过期异常
	@ExceptionHandler(LoginTokenException.class)
	public ResponseEntity<TokenExceptionResult> handleBindException(LoginTokenException e) {
		// TODO 记录异常日志
		return new ResponseEntity<TokenExceptionResult>(TokenExceptionResult.errror(ResultCode.PARAM_MATURITY, e.getMessage()),HttpStatus.OK);
	}
	
}
