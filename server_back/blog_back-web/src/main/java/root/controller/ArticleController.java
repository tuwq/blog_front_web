package root.controller;


import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import root.beans.ImgURIResult;
import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.ArticaleDto;
import root.model.Articale;
import root.param.ArticleParam;
import root.param.PageParam;
import root.service.ArticleService;

@RestController
@RequestMapping("/sys/article")
public class ArticleController {
	
	@Resource
	private ArticleService articleService;
	
	@PostMapping("/add")
	public JsonResult<Void> add(@RequestBody ArticleParam param) {
		articleService.add(param);
		return JsonResult.<Void>success();
	}
	
	@PostMapping(value="/getImgURI", headers="content-type=multipart/form-data")
	public ImgURIResult getimgURI(@RequestParam(value = "fileArray") List<MultipartFile> formdata) {
		return articleService.getImgSrc(formdata);
	}
	
	@GetMapping("/list")
	public PageResult<ArticaleDto> list(PageParam param) {
		return articleService.list(param);
	}
}
