package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.CommentDto;
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
	public PageResult<CommentDto> pageByArt(PageParam param,@RequestParam("articleId") Integer articleId) {
		return commentService.pageByArt(param,articleId);
	}
		
	@GetMapping("/pageByRootId")
	public PageResult<CommentDto> pageByRootId(PageParam param,@RequestParam("rootId") Integer rootId) {
		return commentService.pageByRootId(param,rootId);
	}
	
	@GetMapping("/new/{pageSize}")
	public JsonResult<List<CommentDto>> newComment(@PathVariable("pageSize") Integer pageSize) {
		return commentService.newComment(pageSize);
	}
}

