package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.model.Friend;
import root.service.FriendService;

@RestController
@RequestMapping("/friend")
public class FriendController {

	@Resource
	private FriendService friendService; 
	
	@GetMapping("/all")
	public JsonResult<List<Friend>> all() {
		return friendService.all();
	}
}
