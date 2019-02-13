package root.controller;


import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.exception.NotFoundException;
import root.service.ArticaleService;

@RestController
@RequestMapping("/article")
public class ArticleController {
	
	@Resource
	private ArticaleService articaleService;
	
	@GetMapping("/{id}")
	public JsonResult<ArticaleDto> detail(@PathVariable String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"访问文章的不存在");
		}
		return articaleService.detail(Integer.parseInt(id));
	}
}
