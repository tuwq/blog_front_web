package root.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import root.model.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class LoginDto {
	
	private String token;
	
	private SysUser SysUser;
}
