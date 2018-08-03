package root.beans;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import root.model.Category;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult<T> {
	
	private int code = 200;
	
	private List<T> data;
	
	private PageModel pageModel;
	
	private Category category;

}
