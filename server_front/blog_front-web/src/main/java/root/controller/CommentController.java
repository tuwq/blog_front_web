package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.CommentDto;
import root.exception.CheckParamException;
import root.exception.CommentException;
import root.exception.NotFoundException;
import root.param.ChildCommentParam;
import root.param.PageParam;
import root.param.RootCommentParam;
import root.service.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {

	@Resource
	private CommentService commentService;
	
	@PostMapping("/add/root")
	public JsonResult<Void> rootAdd(@RequestBody RootCommentParam param) {
		commentService.rootAdd(param);
		return JsonResult.<Void>success();
	}
	
	@PostMapping("/add/child")
	public JsonResult<Void> childAdd(@RequestBody ChildCommentParam param) {
		commentService.childAdd(param);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/pageByArt")
	public PageResult<CommentDto> pageByArt(PageParam param,@RequestParam("articleId") String articleId) {
		if (!StringUtils.isNumeric(articleId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"访问文章的不存在");
		}
		return commentService.pageByArt(param,Integer.parseInt(articleId));
	}
	
	@GetMapping("/pageRootComment")
	public PageResult<CommentDto> pageRootComment(PageParam param,@RequestParam("articleId") String articleId) {
		if (!StringUtils.isNumeric(articleId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"访问文章的不存在");
		}
		return commentService.pageRootComment(param,Integer.parseInt(articleId));
	}
		
	@GetMapping("/pageByRootId")
	public PageResult<CommentDto> pageByRootId(PageParam param,@RequestParam("rootId") String rootId) {
		if (!StringUtils.isNumeric(rootId)) {
			throw new CommentException(ResultCode.ITEM_NOT_FOUND,"根评论不存在");
		}
		return commentService.pageByRootId(param,Integer.parseInt(rootId));
	}
	
	@GetMapping("/new/{pageSize}")
	public JsonResult<List<CommentDto>> newComment(@PathVariable("pageSize") String pageSize) {
		if (!StringUtils.isNumeric(pageSize)) {
			throw new CheckParamException("分页大小","为空");
		}
		return commentService.newComment(Integer.parseInt(pageSize));
	}
}

