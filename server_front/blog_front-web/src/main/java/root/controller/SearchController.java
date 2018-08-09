package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.dto.ArticaleDto;
import root.param.PageParam;
import root.service.SearchService;

@RestController
@RequestMapping("/search")
public class SearchController {

	@Resource
	private SearchService searchService;
	
	@PostMapping("/page/keyword")
	public PageResult<ArticaleDto> pageKeyword(@RequestBody PageParam param) {
		return searchService.pageKeyword(param,param.getKeyword());
	}
	
	@GetMapping("/page/all")
	public PageResult<ArticaleDto> pageAll(PageParam param) {
		return searchService.pageAll(param);
	}
	
}
