package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.ImgConfigDto;
import root.service.ConfigService;

@RestController
@RequestMapping("/config")
public class ConfigController {

	@Resource
	private ConfigService configService;
	
	@GetMapping("/img")
	public JsonResult<ImgConfigDto> img() {
		return configService.img();
	}
}
