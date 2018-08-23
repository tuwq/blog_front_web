package root.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.model.Firend;
import root.service.FirendService;

@RestController
@RequestMapping("/firend")
public class FirendController {

	@Resource
	private FirendService firendService; 
	
	@GetMapping("/all")
	public JsonResult<List<Firend>> all() {
		return firendService.all();
	}
}
