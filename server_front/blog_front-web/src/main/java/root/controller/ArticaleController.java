package root.controller;


import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.dto.ArticaleDto;
import root.service.ArticaleService;

@RestController
@RequestMapping("/articale")
public class ArticaleController {
	
	@Resource
	private ArticaleService articaleService;
	
	@GetMapping("/{id}")
	public JsonResult<ArticaleDto> detail(@PathVariable Integer id) {
		return articaleService.detail(id);
	}
}
