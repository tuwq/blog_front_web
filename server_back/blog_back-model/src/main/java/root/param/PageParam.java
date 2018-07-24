package root.param;

import lombok.Data;

@Data
public class PageParam {
	
	// 当前页
	private Integer currenPage = 1;
	// 每页条数,也就是limit
	private Integer pageSize = 5;
	// 间隔多少页
	private Integer skip;
	
	public Integer buildSkip() {
		this.skip = (currenPage-1)*pageSize;
		return this.skip;
	}
	
}
