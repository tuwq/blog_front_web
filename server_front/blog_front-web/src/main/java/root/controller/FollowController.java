package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.param.FollowParam;
import root.service.FollowService;

@RestController
@RequestMapping("/follow")
public class FollowController {
	
	@Resource
	private FollowService followService;
	
	@PostMapping("/user")
	public JsonResult<Void> followUser(@RequestBody FollowParam param) {
		followService.followUser(param);
		return JsonResult.<Void>success();
	}
}
