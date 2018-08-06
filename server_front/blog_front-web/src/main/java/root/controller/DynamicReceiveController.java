package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.dto.DynamicReceiveDto;
import root.param.PageParam;
import root.service.DynamicReceiveService;

@RestController
@RequestMapping("/dynamic")
public class DynamicReceiveController {
	
	@Resource
	private DynamicReceiveService dynamicReceiveService;
	
	@GetMapping("/receive")
	public PageResult<DynamicReceiveDto> receive(PageParam param,@RequestParam("userId") Integer userId) {
		return dynamicReceiveService.receive(param,userId);
	}
}
