package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.dto.CommentDto;
import root.exception.CheckParamException;
import root.mapper.CommentMapper;
import root.mapper.UserInitiateDynamicMapper;
import root.mapper.UserReceiveDynamicMapper;
import root.model.Comment;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class CommentService {

	@Resource
	private CommentMapper commentMapper;
	@Resource
	private UserInitiateDynamicMapper initiateDynamicMapper;
	@Resource
	private UserReceiveDynamicMapper receiveDynamicMapper;
	
	public PageResult<CommentDto> list(PageParam param) {
		// 检查字段
		// 获得总数量
		// 生成skip
		// 查询数据
		// 生成分页结果
		ValidatorUtil.check(param);
		Long total = commentMapper.countAll();
		if (total == 0) {
			return PageResult.<CommentDto>builder().code(200).data(Lists.newArrayList()).pageModel(new PageModel()).build();
		}
		param.buildSkip();
		List<Comment> data = commentMapper.pageWithUserAndArtList(param);
		List<CommentDto> commentDtos = Lists.newArrayList();
		data.forEach(item -> {
			CommentDto commentDto = DtoUtil.adapt(new CommentDto(), item);
			commentDto.setTimeAgo(TimeAgoUtils.format(commentDto.getCreateTime()));
			commentDto.formatTime();
			commentDtos.add(commentDto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<CommentDto>builder().data(commentDtos).pageModel(pageModel).code(200).build();
	}

	public PageResult<CommentDto> pageBySearch(String keyword, PageParam param) {
		// 检查字段
		// 获得搜索条件总数,搜索条件包括评论用户的昵称,评论的内容
		// 生成skip
		// 获得分页数据
		// 返回分页结果
		ValidatorUtil.check(param);
		if (keyword == null) {
			throw new CheckParamException("关键字","不能为空");
		}
		Long total = commentMapper.countAllByKeyWord(keyword);
		if (total == 0) {
			return PageResult.<CommentDto>builder().data(Lists.newArrayList()).pageModel(new PageModel()).code(200).build();
		}
		param.buildSkip();
		List<Comment> data = commentMapper.pageWithUserAndArtListByKeyWord(param.getSkip(),param.getPageSize(),keyword);
		List<CommentDto> commentDtos = Lists.newArrayList();
		data.forEach(item -> {
			CommentDto commentDto = DtoUtil.adapt(new CommentDto(), item);
			commentDto.setTimeAgo(TimeAgoUtils.format(commentDto.getCreateTime()));
			commentDto.formatTime();
			commentDtos.add(commentDto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<CommentDto>builder().data(commentDtos).pageModel(pageModel).code(200).build();
	}

	@Transactional
	public void delBatch(String idsStr) {
		// 批量删除评论，和评论绑定关系的表
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
				.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		if(ids.size()==0) {throw new CheckParamException("选择id","为空");}
		commentMapper.delBatch(ids);
		List<Integer> initiateIds = initiateDynamicMapper.getIdsByCommentIds(ids);
		initiateDynamicMapper.delBatch(initiateIds);
		receiveDynamicMapper.delBatchByInitiateIds(initiateIds);
	}

}
