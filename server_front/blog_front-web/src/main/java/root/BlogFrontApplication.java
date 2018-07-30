package root;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class BlogFrontApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogFrontApplication.class, args);
	}
}
