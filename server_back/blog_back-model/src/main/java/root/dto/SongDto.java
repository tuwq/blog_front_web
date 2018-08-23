package root.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import root.model.Song;

@Setter
@Getter
public class SongDto extends Song {
	// 分类
	private String categoryName;
	// 分类id数组
	private List<Integer> categoryIds;
}
