package root.beans;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.google.common.collect.ArrayListMultimap;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import root.model.ArticleCategory;
import root.model.ArticleTag;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult<T> {
	
	private int code = 200;
	
	private List<T> data;
	
	private Map mapData;
	
	private PageModel pageModel;
	
	private ArticleCategory category;

	private ArticleTag articleTag;
	
	
}
