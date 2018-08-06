package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.LoginDto;
import root.param.LoginParam;
import root.param.RegistParam;
import root.param.UpdatePassParam;
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
	
	@PostMapping("/login")
	public JsonResult<?> login(@RequestBody LoginParam param) {
		return loginService.login(param);
	}
	
	@DeleteMapping("/logout")
	public JsonResult<Void> logout() {
		return loginService.logout();
	}
	
	@PostMapping("/findPass/{email}") 
	public JsonResult<Void> findPass(@PathVariable("email") String email) {
		loginService.findPass(email);
		return JsonResult.<Void>success();
	}
	
	@PutMapping("/updatePass") 
	public JsonResult<Void> updatePass(@RequestBody UpdatePassParam param) {
		loginService.updatePass(param);
		return JsonResult.<Void>success();
	}
	
}
