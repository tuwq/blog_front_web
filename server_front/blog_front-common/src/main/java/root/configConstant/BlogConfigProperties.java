package root.configConstant;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@ConfigurationProperties(prefix="blog.config")
@Component
public class BlogConfigProperties {
	
	private TokenProperties token;
	
	private MailProperties mail;
	
	private CacheProperties cache;
	
	private FrontProperties front;
	
	private QiniuProperties qiniu;
	
	private CategoryProperties category;
	
}
