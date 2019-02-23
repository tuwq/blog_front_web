package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.dto.CommentDto;
import root.exception.CheckParamException;
import root.mapper.SongMapper;
import root.model.Song;
import root.param.PageParam;
import root.util.ValidatorUtil;

@Service
public class MusicService {

	@Resource
	private SongMapper songMapper;
	
	/**
	 * 检查字段
	 * 获得总数
	 * 生成skip
	 * 获得分页数据
	 * 返回分页结果
	 */
	public PageResult<Song> pageByCategory(PageParam param, Integer categoryId) {
		ValidatorUtil.check(param);
		Long total = songMapper.countByCategory(categoryId);
		if (total == 0) {
			return PageResult.<Song>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Song> data = songMapper.pageByCategory(param.getSkip(),param.getPageSize(),categoryId);
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<Song>builder().pageModel(pageModel).data(data).code(200).build();
	}

	/**
	 * 检查字段
	 * 获得条件总数
	 * 生成skip
	 * 获得数据
	 * 返回分页数据
	 * 可以记录一下搜索不到的歌曲
	 */
	public PageResult<Song> pageByKeyword(PageParam param) {
		ValidatorUtil.check(param);
		if (StringUtils.isBlank(param.getKeyword())) {
			throw new CheckParamException("未输入","搜索关键字");
		}
		Long total = songMapper.countByKeyword(param.getKeyword());
		if (total == 0) {
			return PageResult.<Song>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Song> data = songMapper.pageByKeyword(param.getSkip(),param.getPageSize(),param.getKeyword());
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<Song>builder().pageModel(pageModel).data(data).code(200).build();
	}
	
}
