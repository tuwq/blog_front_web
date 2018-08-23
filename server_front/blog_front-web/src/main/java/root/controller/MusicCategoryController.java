package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.model.SongCategory;
import root.service.MusicCateogyrService;

@RestController
@RequestMapping("/musicCategory")
public class MusicCategoryController {

	@Resource
	private MusicCateogyrService  musicCateogyrService;
	
	@GetMapping("/list")
	public JsonResult<List<SongCategory>> list() {
		return musicCateogyrService.list();
	}
}
