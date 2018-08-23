package root.controller;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import root.beans.PageResult;
import root.exception.CheckParamException;
import root.model.Song;
import root.param.PageParam;
import root.service.MusicService;

@RestController
@RequestMapping("/music")
public class MusicController {
	
	@Resource
	private MusicService musicService;
	
	@GetMapping("/pageByCategory")
	public PageResult<Song> pageByCategory(PageParam param,@RequestParam("categoryId") String categoryId) {
		if (!StringUtils.isNumeric(categoryId)) {
			throw new CheckParamException("分类id","不是数字");
		}
		return musicService.pageByCategory(param,Integer.parseInt(categoryId));
	}
	
	@PostMapping("/pageByKeyword")
	public PageResult<Song> pageByKeyword(@RequestBody PageParam param) {
		return musicService.pageByKeyword(param);
	}
}
