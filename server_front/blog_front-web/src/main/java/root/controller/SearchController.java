package root.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping("/page/keyword")
	public PageResult<ArticaleDto> pageKeyword(PageParam param,@RequestParam("keyword") String keyword) {
		return searchService.pageKeyword(param,keyword);
	}
	
	@GetMapping("/page/all")
	public PageResult<ArticaleDto> pageAll(PageParam param) {
		return searchService.pageAll(param);
	}
	
}
