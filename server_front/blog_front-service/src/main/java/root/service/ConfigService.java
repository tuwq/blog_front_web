package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.configConstant.BlogConfigProperties;
import root.constant.RedisCode;
import root.dto.ImgConfigDto;
import root.mapper.FrontImgConfigMapper;
import root.model.FrontImgConfig;
import root.redis.RedisOperator;
import root.util.DtoUtil;
import root.util.JsonUtils;

@Service
public class ConfigService {

	@Resource
	private FrontImgConfigMapper frontImgConfigMapper;
	@Resource
	private RedisOperator redis;
	@Resource
	private BlogConfigProperties blogConfigProperties;
	
	public JsonResult<ImgConfigDto> img() {
		String cacheImgDto = redis.get(RedisCode.CONFIG_IMG_CACHE);
		if (cacheImgDto != null) {
			return JsonResult.<ImgConfigDto>success(JsonUtils.jsonToPojo(cacheImgDto, ImgConfigDto.class));
		}
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
		redis.set(RedisCode.CONFIG_IMG_CACHE, JsonUtils.objectToJson(configDto),blogConfigProperties.getCache().getConfigImgTimeout());
		return JsonResult.<ImgConfigDto>success(configDto);
	}

}
