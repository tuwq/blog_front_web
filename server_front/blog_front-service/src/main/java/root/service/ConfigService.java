package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.dto.ImgConfigDto;
import root.mapper.FrontImgConfigMapper;
import root.model.FrontImgConfig;
import root.util.DtoUtil;

@Service
public class ConfigService {

	@Resource
	private FrontImgConfigMapper frontImgConfigMapper;
	
	
	public JsonResult<ImgConfigDto> img() {
		List<FrontImgConfig> data = frontImgConfigMapper.getAll();
		ImgConfigDto configDto = new ImgConfigDto();
		List<String> sliderImgList = Lists.newArrayList();
		data.forEach(item -> {
			if (item.getBelong() == 1) {
				configDto.setCategoryImg(item.getImg());
			}
			if (item.getBelong() == 2) {
				configDto.setSearchImg(item.getImg());
			}
			if (item.getBelong() == 3) {
				configDto.setArtImg(item.getImg());
			}
			if (item.getBelong() == 4) {
				configDto.setUserImg(item.getImg());
			}
			if (item.getBelong() == 5) {
				configDto.setLoginImg(item.getImg());
			}
			if (item.getBelong() == 6) {
				configDto.setLogoImg(item.getImg());
			}
			if (item.getBelong() == 7) {
				sliderImgList.add(item.getImg());
			}
		});
		configDto.setSliderImgList(sliderImgList);
		return JsonResult.<ImgConfigDto>success(configDto);
	}

}
