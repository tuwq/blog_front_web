package root.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import root.model.Category;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
public class ShowArticleDto {
	
	private List<ArticaleDto> articaleList;
	
	private Category category;
}
