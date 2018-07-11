package root.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import root.beans.JsonResult;
import root.dto.UserDto;
import root.exception.CheckParamException;
import root.model.User;
import root.param.UserParam;
import root.service.TestService;
import root.util.ApplicationContextUtil;
import root.util.DefaultValueUtil;
import root.util.ThreadUtil;
import root.util.ValidatorUtil;

@RestController
@Api(value="测试的接口", tags={"测试的Controller"})
@RequestMapping("/test")
public class TestController {
	
	@Resource
	private TestService testService;
	
	@ApiOperation(value="测试接口", notes="测试的接口")
	@GetMapping("/get")
	public String getAll(Integer id) {
		
		TestService contextService = ApplicationContextUtil.popBean(TestService.class);
		System.out.println(contextService == testService); // true
		List<User> all = contextService.getAll();
		List<UserDto> dtoList = all.stream().map(user -> UserDto.adapt(user)).collect(Collectors.toList());
		// return JsonResult.<List<UserDto>>success(dtoList);
		return "getOk:id=" + id;
	}
	
	@PostMapping("/post")
	public String postUser(@RequestBody UserParam param) {
		/*System.out.println();
		DefaultValueUtil.setDefaultProp(param, UserParam.class);
		DefaultValueUtil.onInsert(param);
		System.out.println(new Date());
		System.out.println(param.getTime());*/
		// System.out.println(ThreadUtil.getCurrentRequest().getRequestURI());
		// ValidatorUtil.check(param);
		return "Postok:id=" + param.getId();
	}
	
	@PutMapping("/put")
	public String putUser(@RequestBody UserParam param) {
		return "Putok:id="+ param.getId();
	}
	
	@DeleteMapping("/del")
	public String delUser(@RequestBody UserParam param) {
		return "Delok:id=" + param.getId();
	}
}
