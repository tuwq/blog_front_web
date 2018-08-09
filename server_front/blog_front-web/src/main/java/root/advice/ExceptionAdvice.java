package root.advice;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import root.beans.CommentExceptionResult;
import root.beans.DynamicExceptionResult;
import root.beans.FileUploadExceptionResult;
import root.beans.NotFoundExceptionResult;
import root.beans.ParamExceptionResult;
import root.beans.SearchNoResultExceptionResult;
import root.beans.TokenExceptionResult;
import root.exception.ActivationException;
import root.exception.CheckParamException;
import root.exception.CommentException;
import root.exception.DynamicException;
import root.exception.FileUploadException;
import root.exception.NotFoundException;
import root.exception.SearchNoResultException;
import root.exception.TokenException;

@ControllerAdvice
public class ExceptionAdvice {
	
	// 检查参数出错的异常
	@ExceptionHandler(CheckParamException.class)
	public ResponseEntity<ParamExceptionResult> handlerParamException(CheckParamException e) {
		// TODO 记录异常日志
		return new ResponseEntity<ParamExceptionResult>(ParamExceptionResult.error(e.getFieldName(),e.getFieldValue()),HttpStatus.OK);
	}
	
	// token检验的异常
	@ExceptionHandler(TokenException.class)
	public ResponseEntity<TokenExceptionResult> handlerTokenException(TokenException e) {
		return new ResponseEntity<TokenExceptionResult>(TokenExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 激活邮箱错误的异常
	@ExceptionHandler(ActivationException.class)
	public void handleActivationException(ActivationException e) {
		// TODO 记录异常日志
		System.out.println(e.getMessage());
	}
	
	// 文件上传时的异常
	@ExceptionHandler(FileUploadException.class)
	public ResponseEntity<FileUploadExceptionResult> handlerFileUploadException(FileUploadException e) {
		return new ResponseEntity<FileUploadExceptionResult>(FileUploadExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 无法找到资源时的异常
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<NotFoundExceptionResult> handlerNotFoundException(NotFoundException e) {
		return new ResponseEntity<NotFoundExceptionResult>(NotFoundExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 搜索关键字没有结果的异常
	@ExceptionHandler(SearchNoResultException.class)
	public ResponseEntity<SearchNoResultExceptionResult> handlerSearchNoResultException(SearchNoResultException e) {
		return new ResponseEntity<SearchNoResultExceptionResult>(SearchNoResultExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 评论相关异常
	@ExceptionHandler(CommentException.class)
	public ResponseEntity<CommentExceptionResult> handlerCommentException(CommentException e) {
		return new ResponseEntity<CommentExceptionResult>(CommentExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 动态相关异常
	@ExceptionHandler(DynamicException.class)
	public ResponseEntity<DynamicExceptionResult> handlerDynamicException(DynamicException e) {
		return new ResponseEntity<DynamicExceptionResult>(DynamicExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	// 处理未知异常
	@ExceptionHandler(RuntimeException.class)
	public void handlerUnknownException(RuntimeException e) {
		// TODO 记录异常日志
		e.printStackTrace();
	}
}
