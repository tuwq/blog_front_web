package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.UserDto;
import root.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Resource
	private UserService userService;
	
	@GetMapping("/info")
	public JsonResult<UserDto> info() {
		return userService.info();
	}
	
}
