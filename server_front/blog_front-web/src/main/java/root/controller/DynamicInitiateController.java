package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.dto.DynamicInitiateDto;
import root.param.PageParam;
import root.service.DynamicInitiateService;

@RestController
@RequestMapping("/dynamic")
public class DynamicInitiateController {

	@Resource
	private DynamicInitiateService dynamicInitiateService;
	
	@GetMapping("/initiate")
	public PageResult<DynamicInitiateDto> initiate(PageParam param,@RequestParam("userId") Integer userId) {
		return dynamicInitiateService.initiate(param,userId);
	}
}
