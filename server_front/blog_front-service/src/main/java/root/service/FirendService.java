package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.mapper.FirendMapper;
import root.model.Firend;

@Service
public class FirendService {

	@Resource
	private FirendMapper firendMapper;

	public JsonResult<List<Firend>> all() {
		// 获得全部友链
		// 检查数量
		Long total = firendMapper.countAll();
		if (total == 0) {
			return JsonResult.success(Lists.newArrayList());
		}
		List<Integer> ids = firendMapper.randomAll();
		List<Firend> data = firendMapper.getAllByIds(ids);
		return JsonResult.<List<Firend>>success(data);
	}
	
}
