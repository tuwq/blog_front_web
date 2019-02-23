package root.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import root.model.FrontImgConfig;

@Setter
@Getter
public class ImgConfigDto{
	// 1 分类
	private String categoryImg;
	// 2 搜索
	private String searchImg;
	// 3 文章
	private String artImg;
	// 4 用户
	private String userImg;
	// 5 登录
	private String loginImg;
	// 6 logo
	private String logoImg;
	// 7 轮播
	private List<String> sliderImgList;
	// 8 主背景
	private String mainImg;
	
}
