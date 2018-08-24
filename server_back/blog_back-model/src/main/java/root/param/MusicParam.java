package root.param;

import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
public class MusicParam {
	
	private Integer id;
	@NotNull
	private Set<Integer> categoryNames;
	@NotBlank
	private String songName;
	@NotBlank
	private String singer;
	
	private String lyric;
	@NotNull
	private Integer weight;
	private Double duration;
}
