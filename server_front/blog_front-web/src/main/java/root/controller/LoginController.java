package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.param.RegistParam;
import root.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Resource
	private LoginService loginService;
	
	@PostMapping("/regist")
	public JsonResult<Void> regist(@RequestBody RegistParam param) {
		loginService.regist(param);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/activationEmail")
	public void activationEmail(@RequestParam("key") String key) {
		loginService.activation(key);
	}
}
