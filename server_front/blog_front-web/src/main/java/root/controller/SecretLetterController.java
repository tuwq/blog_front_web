package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.param.SecretLetterParam;
import root.service.SecretLetterService;

@RestController
@RequestMapping("/secretLetter")
public class SecretLetterController {
	
	@Resource
	private SecretLetterService secretLetterService;
	
	@PostMapping("/add")
	public JsonResult<Void> add(@RequestBody SecretLetterParam param) {
		secretLetterService.add(param);
		return JsonResult.<Void>success();
	}
}
