package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import root.beans.JsonResult;
import root.dto.FrontImgConfigDto;
import root.dto.ImgConfigDto;
import root.exception.CheckParamException;
import root.model.FrontImgConfig;
import root.service.ConfigService;

@RestController
@RequestMapping("/sys/config")
public class ConfigController {

	@Resource
	private ConfigService configService;
	
	@GetMapping("/img")
	public JsonResult<List<FrontImgConfigDto>> img() {
		return configService.img();
	}
	
	@PostMapping(value="/img/update", headers="content-type=multipart/form-data")
	public JsonResult<String> updateImg(@RequestParam(value = "file") MultipartFile file,@RequestParam(value = "id")String id) {
		if(!StringUtils.isNumeric(id)) {
			throw new CheckParamException("id","错误");
		}
		return configService.updateImg(file,id);
	}
}
