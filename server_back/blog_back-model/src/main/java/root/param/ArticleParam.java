package root.param;

import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Service;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleParam {

	@NotBlank(message = "标题不可以为空")
	private String title;
	
	@Size(min=1,message = "分类不可以为空")
	private Set<Integer> categoryNames;
	
	@NotBlank(message = "内容不可以为空")
	private String content;
	
	@NotBlank(message = "封面不可以为空")
	private String coverImg;
}
