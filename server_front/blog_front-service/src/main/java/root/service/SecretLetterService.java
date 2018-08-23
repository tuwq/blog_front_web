package root.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.exception.CheckParamException;
import root.param.SecretLetterParam;
import root.util.RegExUtil;
import root.util.ValidatorUtil;

@Service
public class SecretLetterService {

	@Resource
	private MailService mailService;
	
	public void add(SecretLetterParam param) {
		// 检查字段
		// 正则检查
		// 发送邮件
		ValidatorUtil.check(param);
		if (!RegExUtil.RegExMail(param.getContact()) && !RegExUtil.RegQQNumber(param.getContact())) {
			throw new CheckParamException("联系方式","必须是qq或者邮箱");
		} 
		String subject = "博客收到了私信";
		String content = "来信人的联系方式:"+param.getContact()+"   私信内容:"+param.getContent();
		mailService.sendSecretLetter(subject,content);
	}

}
