package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.ShowFollowDto;
import root.dto.ShowUserDto;
import root.dto.UserDto;
import root.service.InformartionService;

@RestController
@RequestMapping("/informartion")
public class InformartionController {
	
	@Resource
	private InformartionService informartionService;
		
	@GetMapping("/show/userinfo/{id}")
	public JsonResult<ShowUserDto> useriInfo(@PathVariable("id") Integer id) {
		return informartionService.userinfo(id);
	}
	
	@GetMapping("/fans/{id}")
	public JsonResult<List<ShowFollowDto>> userfans(@PathVariable("id") Integer id) {
		return informartionService.userfans(id);
	}
	
	@GetMapping("/follows/{id}")
	public JsonResult<List<ShowFollowDto>> userFollows(@PathVariable("id") Integer id) {
		return informartionService.userfollows(id);
	}
}
