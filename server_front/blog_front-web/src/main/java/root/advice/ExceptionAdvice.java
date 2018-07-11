package root.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import root.beans.JsonResult;
import root.beans.ParamExceptionResult;
import root.exception.CheckParamException;

@ControllerAdvice
public class ExceptionAdvice {
	
	// 检查参数出错的异常
	@ExceptionHandler(CheckParamException.class)
	public ResponseEntity<ParamExceptionResult> handleBindException(CheckParamException e) {
		// TODO 记录异常日志
		return new ResponseEntity<ParamExceptionResult>(ParamExceptionResult.error(e.getFieldName(),e.getFieldValue()),HttpStatus.BAD_REQUEST);
	}
}
