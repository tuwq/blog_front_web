package root.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import root.model.ArticleCategory;

@Data
public class ArticleCategoryDto extends ArticleCategory {
	
	private List<ArticleCategoryDto> childCategoryList;
	
	private Long articleCount = 0L;
}
