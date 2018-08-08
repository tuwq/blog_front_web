package root.beans;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ImgURIResult {
	
	private int code = 200;
	
	private List<ImgNode> imgNodes;
		
	public ImgURIResult(List<ImgNode> nodes) {
		this.imgNodes = nodes;
		this.code = 200;
	}
}
