package root.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.dto.FrontImgConfigDto;
import root.exception.CheckParamException;
import root.mapper.FrontImgConfigMapper;
import root.model.FrontImgConfig;
import root.util.DtoUtil;
import root.util.ThreadUtil;

@Service
public class ConfigService {

	@Resource
	private FrontImgConfigMapper frontImgConfigMapper;
	@Resource
	private QiNiuIMGService qiNiuIMGService;
	
	
	public JsonResult<List<FrontImgConfigDto>> img() {
		List<FrontImgConfig> data = frontImgConfigMapper.getAll();
		List<FrontImgConfigDto> dtos = Lists.newArrayList();
		data.forEach(item -> {
			FrontImgConfigDto dto = DtoUtil.adapt(new FrontImgConfigDto(), item);
			dto.formatNoSecondTime();
			dtos.add(dto);
		});
		return JsonResult.<List<FrontImgConfigDto>>success(dtos);
	}


	@Transactional
	public JsonResult<String> updateImg(MultipartFile file, String id) {
		// 检查字段,文件
		// 上传至七牛云
		// 获得完整路径
		// 修改图片配置信息
		// 返回新路径
		if (file.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!file.getContentType().equals("image/jpeg") && !file.getContentType().equals("image/png")) {
			throw new CheckParamException("文件类型错误","请上传jpg或png文件类型的文件");
		}
		String path = qiNiuIMGService.uploadConfigImg(file)+"?v="+new Date().getTime();
		FrontImgConfig config = frontImgConfigMapper.selectByPrimaryKey(Integer.parseInt(id));
		config.setImg(path);
		config.setUpdateTime(new Date());
		frontImgConfigMapper.updateByPrimaryKeySelective(config);
		return JsonResult.<String>success(path);
	}

}
