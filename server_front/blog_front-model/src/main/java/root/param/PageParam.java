package root.param;

import javax.validation.constraints.Min;

import lombok.Data;

@Data
public class PageParam {
	
	// 当前页
	@Min(value=1,message="当前页错误")
	private Integer currentPage = 1;
	
	// 每页条数,也就是limit
	@Min(value=1,message="每页展示数量错误错误")
	private Integer pageSize = 3;
	// 间隔多少页
	private Integer skip;
	
	public Integer buildSkip() {
		this.skip = (currentPage-1)*pageSize;
		return this.skip;
	}
}
