package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.mapper.SongCategoryMapper;
import root.model.SongCategory;

@Service
public class MusicCateogyrService {

	@Resource
	private SongCategoryMapper songCategoryMapper;
	
	public JsonResult<List<SongCategory>> list() {
		Long total = songCategoryMapper.countAll();
		if (total == 0) {
			return JsonResult.<List<SongCategory>>success(Lists.newArrayList());
		}
		List<SongCategory> data = songCategoryMapper.list();
		return JsonResult.<List<SongCategory>>success(data);
	}
}
