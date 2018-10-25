package root.configConstant;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CacheProperties {
	
	private Integer articleInfoTimeout;
	private Integer articleListIndexTimeout;
	private Integer configImgTimeout;
}
