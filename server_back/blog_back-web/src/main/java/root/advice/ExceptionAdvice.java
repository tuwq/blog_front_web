package root.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import root.beans.FileUploadExceptionResult;
import root.beans.ParamExceptionResult;
import root.beans.TokenExceptionResult;
import root.constant.ResultCode;
import root.exception.CheckParamException;
import root.exception.FileUploadException;
import root.exception.TokenException;
import root.util.CookieUtil;
import root.util.ThreadUtil;

@ControllerAdvice
public class ExceptionAdvice {
	
	// 检查参数出错的异常
	@ExceptionHandler(CheckParamException.class)
	public ResponseEntity<ParamExceptionResult> handleBindException(CheckParamException e) {
		// TODO 记录异常日志
		return new ResponseEntity<ParamExceptionResult>(ParamExceptionResult.error(e.getFieldName(),e.getFieldValue()),HttpStatus.OK);
	}
	
	// 检查LOGIN_TOKEN过期异常
	@ExceptionHandler(TokenException.class)
	public ResponseEntity<TokenExceptionResult> handleBindException(TokenException e) {
		// token过期
		return new ResponseEntity<TokenExceptionResult>(TokenExceptionResult.errror(e.getResultCode(), e.getMsg()),HttpStatus.OK);
	}
	
	// 文件上传时的异常
	@ExceptionHandler(FileUploadException.class)
	public ResponseEntity<FileUploadExceptionResult> handlerFileUploadException(FileUploadException e) {
		return new ResponseEntity<FileUploadExceptionResult>(FileUploadExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 处理未知异常
	@ExceptionHandler(RuntimeException.class)
	public void handlerUnknownException(RuntimeException e) {
		// TODO 记录异常日志
		e.printStackTrace();
	}
	
	// 处理未知异常
	@ExceptionHandler(Exception.class)
	public void handlerUnknownException2(Exception e) {
		// TODO 记录异常日志
		e.printStackTrace();
	}
}
