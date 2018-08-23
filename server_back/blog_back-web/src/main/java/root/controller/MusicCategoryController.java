package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.model.SongCategory;
import root.service.MusicCategoryService;

@RestController
@RequestMapping("/sys/music/category")
public class MusicCategoryController {

	@Resource
	private MusicCategoryService musicCategoryService;
	
	@GetMapping("/list")
	public JsonResult<List<SongCategory>> list() {
		return musicCategoryService.list();
	}
}
