package root.controller;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.DynamicReceiveDto;
import root.exception.NotFoundException;
import root.param.PageParam;
import root.service.DynamicReceiveService;

@RestController
@RequestMapping("/dynamic")
public class DynamicReceiveController {
	
	@Resource
	private DynamicReceiveService dynamicReceiveService;
	
	@GetMapping("/receive")
	public PageResult<DynamicReceiveDto> receive(PageParam param,@RequestParam("userId") String userId) {
		if(!StringUtils.isNumeric(userId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户不存在");
		}
		return dynamicReceiveService.receive(param,Integer.parseInt(userId));
	}
}
