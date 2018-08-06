package root.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.dto.CommentDto;
import root.dto.DynamicInitiateDto;
import root.exception.CheckParamException;
import root.exception.DynamicException;
import root.mapper.CommentMapper;
import root.mapper.UserInitiateDynamicMapper;
import root.mapper.UserMapper;
import root.model.Articale;
import root.model.Comment;
import root.model.User;
import root.model.UserInitiateDynamic;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class DynamicInitiateService {

	@Resource
	private UserMapper userMapper;
	@Resource
	private UserInitiateDynamicMapper initiateDynamicMapper;
	@Resource
	private CommentMapper commentMapper;
	
	public PageResult<DynamicInitiateDto> initiate(PageParam param,Integer userId) {
		// 检查字段
		// 用户是否存在
		// 生成skip
		// 获得总数量,若为0直接返回空数据
		// 获得用户的发起动态信息
		// 根据类型获得动态类型的具体信息
		ValidatorUtil.check(param);
		if (userId == null) {
			throw new CheckParamException("用户id","为空");
		}
		int count = userMapper.countById(userId);
		if (count == 0) {
			throw new DynamicException(ResultCode.DYNAMIC_USER_NOTFOUND,"该动态的用户未找到");
		}
		param.buildSkip();
		Long total = initiateDynamicMapper.countByInitiateUserId(userId);
		if (total == 0) {
			return PageResult.<DynamicInitiateDto>builder().data(Lists.newArrayList()).pageModel(new PageModel()).code(200).build();
		}
		List<DynamicInitiateDto> data = Lists.newArrayList();
		List<UserInitiateDynamic> initiateDynamicList = initiateDynamicMapper.getListByInitiateUserId(param.getSkip(),param.getPageSize(),userId);
		List<DynamicInitiateDto> RootCommentDynamicList = getRootCommentDynamicList(initiateDynamicList);
		List<DynamicInitiateDto> ChildCommentDynamicList = getChildCommentDynamicList(initiateDynamicList);
		data.addAll(RootCommentDynamicList);
		data.addAll(ChildCommentDynamicList);
		Collections.sort(data, DynamicComparator);
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<DynamicInitiateDto>builder().data(data).pageModel(pageModel).code(200).build();
	}
	
	public Comparator<DynamicInitiateDto> DynamicComparator = new Comparator<DynamicInitiateDto>() {
		@Override
		public int compare(DynamicInitiateDto o1, DynamicInitiateDto o2) {
			return (int) (o1.getCommentDto().getCreateTime().getTime()-o2.getCommentDto().getCreateTime().getTime());
		}
		
	};
	
	private List<DynamicInitiateDto> getRootCommentDynamicList(List<UserInitiateDynamic> initiateDynamicList){
		// 过滤是根评论的动态
		// 取得该动态的评论信息和文章信息
		List<UserInitiateDynamic> rootCommentDynamicList = initiateDynamicList.stream().filter(initiateDynamic -> 
			initiateDynamic.getType()==1 && initiateDynamic.getAction()==1
		).collect(Collectors.toList());
		if(rootCommentDynamicList.size()==0) {
			return Lists.newArrayList();
		}
		List<DynamicInitiateDto> dynamicDtos = Lists.newArrayList();
		rootCommentDynamicList.stream().forEach(commentDynamic -> {
			Articale articale = commentMapper.getArtById(commentDynamic.getTypeId());
			Comment comment = commentMapper.getByIdWithUser(commentDynamic.getTypeId());
			CommentDto commentDto = DtoUtil.adapt(new CommentDto(), comment);
			commentDto.formatNoSecondTime();
			commentDto.setTimeAgo(TimeAgoUtils.format(commentDto.getCreateTime()));
			DynamicInitiateDto dynamicDto = DynamicInitiateDto.builder()
								.articaleDto(DtoUtil.adapt(new ArticaleDto(), articale))
								.commentDto(commentDto)
								.userInitiateDynamic(commentDynamic).build();
			dynamicDtos.add(dynamicDto);
		});
		return dynamicDtos;
	}
	
	private List<DynamicInitiateDto> getChildCommentDynamicList(List<UserInitiateDynamic> initiateDynamicList) {
		// 过滤是子评论的动态
		// 取得该动态的评论信息和文章信息
		// 取的该评论的父评论信息和父评论用户信息
		List<UserInitiateDynamic> childCommentDynamicList = initiateDynamicList.stream().filter(initiateDynamic -> 
			initiateDynamic.getType()==1 && initiateDynamic.getAction()==2
		).collect(Collectors.toList());
		if (childCommentDynamicList.size() == 0) {
			return Lists.newArrayList();
		}
		List<DynamicInitiateDto> dynamicDtos = Lists.newArrayList();
		childCommentDynamicList.forEach(commentDynamic -> {
			Articale articale = commentMapper.getArtById(commentDynamic.getTypeId());
			Comment comment = commentMapper.getByIdWithUser(commentDynamic.getTypeId());
			User parentUser = commentMapper.getUserById(comment.getParentId());
			CommentDto commentDto = DtoUtil.adapt(new CommentDto(), comment);
			commentDto.formatNoSecondTime();
			commentDto.setTimeAgo(TimeAgoUtils.format(commentDto.getCreateTime()));
			commentDto.setParentUser(parentUser);
			DynamicInitiateDto dynamicDto = DynamicInitiateDto.builder()
										.articaleDto(DtoUtil.adapt(new ArticaleDto(), articale))
										.commentDto(commentDto)
										.userInitiateDynamic(commentDynamic).build();
			dynamicDtos.add(dynamicDto);
		});
		return dynamicDtos;
	}
}
