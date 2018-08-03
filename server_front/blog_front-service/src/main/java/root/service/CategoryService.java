package root.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.ImmutableBiMap;
import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.exception.CheckParamException;
import root.exception.NotFoundException;
import root.mapper.ArticaleMapper;
import root.mapper.CategoryMapper;
import root.model.Articale;
import root.model.Category;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class CategoryService {

	@Resource
	private CategoryMapper categoryMapper;
	@Resource
	private ArticaleMapper articaleMapper;
	
	public PageResult<ArticaleDto> categoryList(PageParam param, Integer id) {
		// 检查字段
		// 分类id的分类是否存在，不存在返回404
		// 分类id下的所有文章总数
		// 生成skip
		// 获得指定数量的文章和每篇文章的用户信息
		// 获得分类信息
		// 生成分页返回数据
		ValidatorUtil.check(param);
		if (id == null) {
			throw new CheckParamException("分类Id","为空");
		}
		int count = categoryMapper.countById(id);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"分类不存在");
		}
		Category category = categoryMapper.selectByPrimaryKey(id);
		Long total = articaleMapper.countAllByCategoryId(id);
		param.buildSkip();
		List<Articale> articaleList = articaleMapper.categoryPage(param.getSkip(),param.getPageSize(),id);
		List<ArticaleDto> articaleDtoList = Lists.newArrayList();
		articaleList.forEach(articale -> {
			ArticaleDto articaleDto = DtoUtil.adapt(new ArticaleDto(), articale);
			articaleDto.setTimeAgo(TimeAgoUtils.format(articaleDto.getCreateTime()));
			articaleDto.formatNoSecondTime();
			articaleDtoList.add(articaleDto);
		});
		PageModel pageModel = new PageModel(total,articaleDtoList.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<ArticaleDto>builder().category(category).pageModel(pageModel).code(200).data(articaleDtoList).build();
	}
	
}
