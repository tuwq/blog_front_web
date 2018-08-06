package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.async.IncrDataHandler;
import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.exception.CheckParamException;
import root.exception.NotFoundException;
import root.mapper.ArticaleMapper;
import root.mapper.CategoryMapper;
import root.model.Articale;
import root.model.Category;
import root.util.DtoUtil;
import root.util.TimeAgoUtils;

@Service
public class ArticaleService {

	@Resource
	private IncrDataHandler incrDataHandler;
	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private CategoryMapper categoryMapper;
	public JsonResult<ArticaleDto> detail(Integer id) {
		// 检查字段,访问id不存在去404
		// 检查资源是否存在,不存在去404
		// 获得文章信息
		// 获得文章分类信息
		// 获得文章用户信息
		// 获得上一篇和下一篇的文章数据
		if (id == null) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"访问文章id为空");
		}
		int count = articaleMapper.countById(id);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"访问文章的不存在");
		}
		Articale articale = articaleMapper.getByIdWithUser(id);
		List<Category> categoryList = categoryMapper.getArtCategoryListById(id);
		articale.setCategoryList(categoryList);
		ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
		Articale prev = articaleMapper.getPrev(id);
		Articale next = articaleMapper.getNext(id);
		articaleDto.setPrev(prev);
		articaleDto.setNext(next);
		articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getUpdateTime()));
		articaleDto.formatNoSecondTime();
		incrDataHandler.articleBrowseIncr(id);
		return JsonResult.<ArticaleDto>success(articaleDto);
	}
	
	
}
