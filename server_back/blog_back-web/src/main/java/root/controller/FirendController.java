package root.controller;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.FirendDto;
import root.exception.CheckParamException;
import root.param.FirendParam;
import root.param.PageParam;
import root.service.FirendService;

@RestController
@RequestMapping("/sys/firend")
public class FirendController {
	
	@Resource
	private FirendService firendService;
	
	@PostMapping(value="/add", headers="content-type=multipart/form-data")
	public JsonResult<Void> addImg(@RequestParam(value = "file") MultipartFile file,
			@RequestParam("nickname") String nickname,@RequestParam("website") String website,
			@RequestParam("desc") String desc) {
		firendService.add(file,nickname,website,desc);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/info/{id}")
	private JsonResult<FirendDto> info(@PathVariable("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new CheckParamException("id","不是数字");
		}
		return firendService.info(Integer.parseInt(id));
	}
	
	@PutMapping("/edit")
	public JsonResult<Void> edit(@RequestBody FirendParam param) {
		firendService.edit(param);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/page")
	public PageResult<FirendDto> page(PageParam param) {
		return firendService.page(param);
	}
	
	@PostMapping(value="/update/avatar", headers="content-type=multipart/form-data")
	public JsonResult<String> updateImg(@RequestParam(value = "file") MultipartFile file,@RequestParam(value = "id")String id) {
		if(!StringUtils.isNumeric(id)) {
			throw new CheckParamException("id","错误");
		}
		return firendService.updateAvatar(file,Integer.parseInt(id));
	}
	
	@DeleteMapping("/delBatch/{ids}")
	public JsonResult<Void> delBatch(@PathVariable("ids") String ids){
		firendService.delBatch(ids);
		return JsonResult.<Void>success();
	}
}
