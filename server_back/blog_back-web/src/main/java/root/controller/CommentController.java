package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.DeleteMapping;
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
import root.param.PageParam;
import root.service.CommentService;

@RestController
@RequestMapping("/sys/comment")
public class CommentController {

	@Resource
	private CommentService commentService;
	
	@GetMapping("/page")
	public PageResult<CommentDto> page(PageParam param) {
		return commentService.list(param);
	}
	
	@PostMapping("/search")
	public PageResult<CommentDto> pageBySearch(@RequestBody PageParam param) {
		return commentService.pageBySearch(param.getKeyword(),param);
	}
	
	@DeleteMapping("/delBatch/{ids}")
	public JsonResult<Void> delBatch(@PathVariable("ids") String ids){
		commentService.delBatch(ids);
		return JsonResult.<Void>success();
	}

}
