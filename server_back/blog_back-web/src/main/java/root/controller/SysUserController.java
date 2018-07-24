package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.SysUserDto;
import root.service.SysUserService;

@RestController
@RequestMapping("/sys/user")
public class SysUserController {
	@Resource
	private SysUserService sysUserService;
	
	@GetMapping("/info")
	public JsonResult<SysUserDto> info() {
		SysUserDto info = sysUserService.info();
		return JsonResult.<SysUserDto>success(info);
	}
	
}
