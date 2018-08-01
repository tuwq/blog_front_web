package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import root.beans.JsonResult;
import root.dto.UserDto;
import root.param.BasisSettingParam;
import root.param.SecuritySettingParam;
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
	
	@GetMapping("/editInfo")
	public JsonResult<UserDto> editInfo() {
		return userService.editInfo();
	}
	
	@PostMapping(value="/avatar", headers="content-type=multipart/form-data")
	public JsonResult<String> avatar(@RequestParam(value = "avatar_file") MultipartFile file) {
		return userService.avatar(file);
	}
	
	@PutMapping("/basisSetting")
	public JsonResult<Void> basisSetting(@RequestBody BasisSettingParam param) {
		userService.basisSetting(param);
		return JsonResult.<Void>success();
	}
	
	@PutMapping("/securitySetting")
	public JsonResult<Void> securitySetting(@RequestBody SecuritySettingParam param) {
		userService.securitySetting(param);
		return JsonResult.<Void>success();
	}
}
