package root.beans;

import lombok.Data;

@Data
public class PageModel {

	// 当前页数
	private Integer currentPage;
	// 每页显示
	private Integer pageSize;
	// 所有的总数
	private Long total;
	// 当前总数
	private Integer currentTotal;
	// 最大页码
	private Integer maxPageCode;
	
	public PageModel(Long total,Integer currentTotal,Integer currentPage,Integer pageSize) {
		this.total = total;
		this.currentPage = currentPage;
		this.currentTotal = currentTotal;
		this.pageSize = pageSize;
		this.maxPageCode = getMaxPageCode();
	}
	
	public int getMaxPageCode() {
		if(this.pageSize == 0) {
			this.pageSize = 1;
		}
		return (int) Math.ceil((double) this.total / (double) this.pageSize);
	}
}
