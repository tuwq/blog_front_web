package root.beans;

import java.util.List;


import lombok.Data;
import root.model.Article;

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
	
	public PageModel() {
		this.total = 0l;
		this.currentTotal = 0;
	}
	
	public PageModel(Long total,Integer currentTotal,Integer currentPage,Integer pageSize) {
		this.total = total;
		this.pageSize = pageSize;
		this.currentPage = currentPage;
		this.currentTotal = currentTotal;
		this.maxPageCode = buildMaxPageCode();
	}
	
	public int buildMaxPageCode() {
		if(this.pageSize == 0) {
			this.pageSize = 1;
		}
		return (int) Math.ceil((double) this.total / (double) this.pageSize);
	}

}
