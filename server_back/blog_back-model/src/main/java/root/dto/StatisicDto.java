package root.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StatisicDto {
	
	private Long accessSum;
	
	private Long totalArticleSum;
	
	private Long totalCommentSum;
	
	private Long totalUserSum;
	
	private List<EveryDayDto> accessWeekList;
	
}
