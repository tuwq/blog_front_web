package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.StatisicDto;
import root.service.StatisicService;

@RestController
@RequestMapping("/statisic")
public class StatisicController {
	
	@Resource
	private StatisicService statisicService;
	
	@GetMapping("/all")
	public JsonResult<StatisicDto> all() {
		return statisicService.all();
	}
}
