package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.exception.CheckParamException;
import root.mapper.SongCategoryMapper;
import root.model.SongCategory;

@Service
public class MusicCategoryService {

	@Resource
	private SongCategoryMapper songCategoryMapper;
	
	public JsonResult<List<SongCategory>> list() {
		// 获取所有歌曲分类信息
		int count = songCategoryMapper.countAll();
		if (count == 0) {
			throw new CheckParamException("没有","任何分类");
		}
		List<SongCategory> data = songCategoryMapper.list();
		return JsonResult.<List<SongCategory>>success(data);
	}

}
