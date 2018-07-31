package root.controller;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import root.beans.JsonResult;
import root.redis.RedisOperator;
import root.service.MailService;
import root.service.QiNiuService;

@RestController
public class TestController {
	
	@Resource
	private RedisOperator redis;
	@Resource
	private MailService mailService;
	@Resource
	private QiNiuService qiNiuService;
	@Value("${mailActivationApiName}")
	private String mailActivationApiName;
	
	
	
	@GetMapping("/add")
	public JsonResult add() {
		String content = 
				"您的登录邮箱为1246361002@qq.com,点击链接激活账号"+mailActivationApiName+"?key=1312312asdas"
					+ " 若点击无效，请将内容复制放入浏览器地址栏当中";		
		mailService.sendSimpleMail("博客激活邮件", content, "1246361002@qq.com");
		return JsonResult.<Void>success();
	}
	
	
	@GetMapping("/avatar")
	public JsonResult avatar() {
		return JsonResult.success();
	}
	
	@GetMapping("/get")
	public JsonResult get() {
		System.out.println(redis.get("aa"));
		return JsonResult.success();
	}
	
	@GetMapping("/del")
	public JsonResult del() {
		redis.del("aa");
		return JsonResult.success();
	}
}
