package root.configConstant;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;


@Configuration
@EnableConfigurationProperties(BlogConfigProperties.class)
public class BlogPropertiesConfiguration  {
	

}
