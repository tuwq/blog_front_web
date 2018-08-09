package root.controller;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.DynamicInitiateDto;
import root.exception.NotFoundException;
import root.param.PageParam;
import root.service.DynamicInitiateService;

@RestController
@RequestMapping("/dynamic")
public class DynamicInitiateController {

	@Resource
	private DynamicInitiateService dynamicInitiateService;
	
	@GetMapping("/initiate")
	public PageResult<DynamicInitiateDto> initiate(PageParam param,@RequestParam("userId") String userId) {
		if (!StringUtils.isNumeric(userId)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户不存在");
		}
		return dynamicInitiateService.initiate(param,Integer.parseInt(userId));
	}
}
