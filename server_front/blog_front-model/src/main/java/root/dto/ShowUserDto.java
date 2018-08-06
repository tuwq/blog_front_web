package root.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
public class ShowUserDto {
	
	private Integer identity;
	
	private UserDto userDto;

	private Integer followStatus;
	
	private Integer fansSum;
	
	private Integer followsSum;
	
	private Long dynamicInitiateSum;
	
	private Long dynamicReceiveSum;
}
