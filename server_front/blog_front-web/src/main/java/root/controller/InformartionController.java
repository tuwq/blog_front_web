package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.ShowFollowDto;
import root.dto.ShowUserDto;
import root.dto.UserDto;
import root.exception.NotFoundException;
import root.service.InformartionService;

@RestController
@RequestMapping("/informartion")
public class InformartionController {
	
	@Resource
	private InformartionService informartionService;
		
	@GetMapping("/show/userinfo/{id}")
	public JsonResult<ShowUserDto> useriInfo(@PathVariable("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户不存在");
		}
		return informartionService.userinfo(Integer.parseInt(id));
	}
	
	@GetMapping("/fans/{id}")
	public JsonResult<List<ShowFollowDto>> userfans(@PathVariable("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户不存在");
		}
		return informartionService.userfans(Integer.parseInt(id));
	}
	
	@GetMapping("/follows/{id}")
	public JsonResult<List<ShowFollowDto>> userFollows(@PathVariable("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户不存在");
		}
		return informartionService.userfollows(Integer.parseInt(id));
	}
}
