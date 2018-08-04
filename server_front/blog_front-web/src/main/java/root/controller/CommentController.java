package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.CommentDto;
import root.param.CommentParam;
import root.param.PageParam;
import root.service.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {

	@Resource
	private CommentService commentService;
	
	@PostMapping("/add/root")
	public JsonResult<Void> rootAdd(@RequestBody CommentParam param) {
		commentService.rootAdd(param);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/page")
	public PageResult<CommentDto> pageByArt(PageParam param,@RequestParam("articleId") Integer articleId) {
		return commentService.pageByArt(param,articleId);
	}
}
