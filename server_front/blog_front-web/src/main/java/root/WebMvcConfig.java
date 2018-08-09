package root;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import root.filter.HttpFilter;
import root.interceptor.AccessInterceptor;
import root.interceptor.NeedLoginInterceptor;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter  {
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
	
		registry.addResourceHandler("/**")
				// swagger2访问资源
				.addResourceLocations("classpath:/META-INF/resources/")
				// 静态网址访问资源,注意后面加斜杠
				.addResourceLocations("classpath:/static/");
	}
	
	@Bean
    public HttpFilter getHttpFilter() {
        return new HttpFilter();
    }

	@Bean
	public AccessInterceptor getAccessInterceptor() {
		return new AccessInterceptor();
	}
	
	@Bean
	public NeedLoginInterceptor getNeedLoginInterceptor() {
		return new NeedLoginInterceptor();
	}
	
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(getHttpFilter()).addPathPatterns("/**");
        registry.addInterceptor(getNeedLoginInterceptor())
        .addPathPatterns("/user/**","/follow/**","/comment/add/**","/dynamic/receive")
        .excludePathPatterns("/user/info");
        registry.addInterceptor(getAccessInterceptor())
        .addPathPatterns("/articale/**","/category/praise/**");
        super.addInterceptors(registry);
    }
    
}
