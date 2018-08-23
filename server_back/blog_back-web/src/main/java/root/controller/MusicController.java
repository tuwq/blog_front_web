package root.controller;

import java.util.Set;

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
import root.dto.SongDto;
import root.exception.CheckParamException;
import root.model.Song;
import root.param.MusicParam;
import root.param.PageParam;
import root.service.MusicService;

@RestController
@RequestMapping("/sys/music")
public class MusicController {

	@Resource
	private MusicService musicService;
	
	@PostMapping(value="/add", headers="content-type=multipart/form-data")
	public JsonResult<Void> add(@RequestParam(value = "cover") MultipartFile cover,
			@RequestParam(value = "music")MultipartFile music,@RequestParam("songName") String songName,
			@RequestParam("singer") String singer,@RequestParam("lyric") String lyric,@RequestParam("weight") Integer weight,
			@RequestParam("duration") Double duration,@RequestParam("categoryNames") Set<Integer> categoryNames) {
		MusicParam param = MusicParam.builder().categoryNames(categoryNames).songName(songName).singer(singer)
					.lyric(lyric).weight(weight).duration(duration).build();
		musicService.add(cover,music,param);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/{id}")
	public JsonResult<SongDto> info(@PathVariable("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new CheckParamException("id","不是数字");
		}
		return musicService.info(Integer.parseInt(id));
	}
	
	@PostMapping("/edit")
	public JsonResult<Void> edit(@RequestBody MusicParam param) {
		musicService.edit(param);
		return JsonResult.<Void>success();
	}
	
	@GetMapping("/page")
	public PageResult<SongDto> page(PageParam param) {
		return musicService.page(param);
	}
	
	@DeleteMapping("/delBatch/{ids}")
	public JsonResult<Void> delBatch(@PathVariable("ids") String ids){
		musicService.delBatch(ids);
		return JsonResult.<Void>success();
	}
	
	@PostMapping("/search")
	public PageResult<SongDto> search(@RequestBody PageParam param) {
		return musicService.search(param);
	}
	
	@PostMapping(value="/update/cover", headers="content-type=multipart/form-data")
	public JsonResult<Void> updateCover(@RequestParam(value = "cover") MultipartFile cover,
									@RequestParam("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new CheckParamException("id","不是数字");
		}
		musicService.updateCover(Integer.parseInt(id),cover);
		return JsonResult.<Void>success();
	}
	
	@PostMapping(value="/update/music", headers="content-type=multipart/form-data")
	public JsonResult<Void> updateMusic(@RequestParam(value = "music") MultipartFile music,
									@RequestParam("id") String id) {
		if (!StringUtils.isNumeric(id)) {
			throw new CheckParamException("id","不是数字");
		}
		musicService.updateMusic(Integer.parseInt(id),music);
		return JsonResult.<Void>success();
	}
	
}
