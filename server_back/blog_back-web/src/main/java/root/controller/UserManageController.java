package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.UserDto;
import root.param.PageParam;
import root.service.UserManageService;

@RestController
@RequestMapping("/sys/userManage")
public class UserManageController {

	@Resource
	private UserManageService userManageService;
	
	@GetMapping("/page")
	public PageResult<UserDto> page(PageParam param) {
		return userManageService.page(param);
	}
	
	@PostMapping("/search")
	public PageResult<UserDto> search(@RequestBody PageParam param) {
		return userManageService.search(param.getKeyword(),param);
	}
	
	@PutMapping("/updateBatch/{ids}")
	public JsonResult<Void> updateBatch(@PathVariable("ids") String ids) {
		userManageService.updateBatch(ids);
		return JsonResult.<Void>success();
	}

}
