package root.controller;



import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.LoginDto;
import root.param.LoginParam;
import root.service.LoginService;

@RestController
@RequestMapping("/sys")
public class LoginController {
	
	@Resource
	private LoginService loginService;
	
	@PostMapping("/login")
	public JsonResult<LoginDto> login(@RequestBody LoginParam param) {
		LoginDto login = loginService.login(param);
		return JsonResult.<LoginDto>success(login);
	}
	
	@PutMapping("/quitlogin")
	public JsonResult<Void> quitlogin() {
		return loginService.quitlogin();
	}
}
