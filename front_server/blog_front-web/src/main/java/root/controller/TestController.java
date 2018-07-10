package root.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	@GetMapping("/test1")
	public JsonResult<List<UserDto>> getAll() {
		List<User> all = testService.getAll();
		List<UserDto> dtoList = all.stream().map(user -> UserDto.adapt(user)).collect(Collectors.toList());
		return JsonResult.<List<UserDto>>success(dtoList);
	}
	
	@PostMapping("/test2")
	public String postUser(UserParam param) {
		System.out.println();
		DefaultValueUtil.setDefaultProp(param, UserParam.class);
		DefaultValueUtil.onInsert(param);
		System.out.println(new Date());
		System.out.println(param.getTime());
		// ValidatorUtil.check(param);
		return "ok";
	}
}
