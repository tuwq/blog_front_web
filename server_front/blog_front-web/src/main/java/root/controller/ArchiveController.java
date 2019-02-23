package root.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.dto.ArticleDto;
import root.param.PageParam;
import root.service.ArchiveService;

@RestController
@RequestMapping("/archive")
public class ArchiveController {

	@Autowired
	private ArchiveService archiveService;
	
	@GetMapping("/createTime")
	public PageResult<ArticleDto> createTime(PageParam param) {
		return this.archiveService.createTime(param);
	}
}
