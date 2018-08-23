package root.service;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MailService {

	@Resource
	private JavaMailSender mailSender;
	@Value("${spring.mail.username}")
	private String from;
	@Value("${myMail}")
	private String myMail;

	@Async
	public void sendSimpleMail(String subject,String content,String toEmail){
		// 发送邮件
	    SimpleMailMessage message = new SimpleMailMessage();
	    message.setFrom(from);
	    message.setTo(toEmail);
	    message.setSubject(subject);
	    message.setText(content);
	    mailSender.send(message);
	}

	@Async
	public void sendSecretLetter(String subject, String content) {
		SimpleMailMessage message = new SimpleMailMessage();
	    message.setFrom(from);
	    message.setTo(myMail);
	    message.setSubject(subject);
	    message.setText(content);
	    mailSender.send(message);
	}
}
