package root.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.async.VisitDataHandler;
import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.ArticaleDto;
import root.dto.CommentDto;
import root.dto.DynamicReceiveDto;
import root.exception.CheckParamException;
import root.exception.DynamicException;
import root.mapper.CommentMapper;
import root.mapper.UserMapper;
import root.mapper.UserReceiveDynamicMapper;
import root.model.Articale;
import root.model.Comment;
import root.model.UserInitiateDynamic;
import root.model.UserReceiveDynamic;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.ThreadUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class DynamicReceiveService {

	@Resource
	private UserMapper userMapper;
	@Resource
	private UserReceiveDynamicMapper userReceiveDynamicMapper;
	@Resource
	private CommentMapper commentMapper;
	@Resource
	private VisitDataHandler visitDataHandler;
	
	public PageResult<DynamicReceiveDto> receive(PageParam param, Integer userId) {
		// 检查字段
		// 用户是否存在
		// 用户是否是当前浏览中的用户
		// 生成skip
		// 获得总数量,若为0直接返回空数据
		// 获得用户接收动态的列表
		// 根据类型获得动态类型的具体信息
		// 修改动态状态以观看
		ValidatorUtil.check(param);
		if (userId == null) {
			throw new CheckParamException("用户Id","为空");
		}
		int count = userMapper.countById(userId);
		if (count == 0) {
			throw new DynamicException(ResultCode.DYNAMIC_USER_NOTFOUND,"用户不存在");
		}
		Integer tokenUserId = ThreadUtil.getCurrentUserId();
		if (tokenUserId != userId) {
			throw new DynamicException(ResultCode.DYNAMIC_NOT_AUTH,"没有权限查看他人用户接收的消息");
		}
		param.buildSkip();
		Long total = userReceiveDynamicMapper.countByReceiveUserId(userId);
		if (total == 0) {
			return PageResult.<DynamicReceiveDto>builder().data(Lists.newArrayList()).pageModel(new PageModel()).code(200).build();
		}
		List<UserInitiateDynamic> initiateDynamicList = userReceiveDynamicMapper.getInitiateDynamicListByReceiveUserId(param.getSkip(),param.getPageSize(),userId);
		List<DynamicReceiveDto> data = Lists.newArrayList();
		List<DynamicReceiveDto> commentDynamicList = getCommentDynamicList(initiateDynamicList);
		data.addAll(commentDynamicList);
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		List<UserReceiveDynamic> receiveList = userReceiveDynamicMapper.getByReceiverUserId(param.getSkip(),param.getPageSize(), userId);
		List<UserReceiveDynamic> needVisit = receiveList.stream().filter(receive ->
			receive.getVisit()==0
		).collect(Collectors.toList());
		visitDataHandler.visitReceiveDynamic(needVisit);
		return PageResult.<DynamicReceiveDto>builder().pageModel(pageModel).data(data).code(200).build();
	}

	private List<DynamicReceiveDto> getCommentDynamicList(List<UserInitiateDynamic> initiateDynamicList) {
		// 过滤是评论的动态
		// 获得该动态的文章信息和评论信息和评论的用户信息
		List<UserInitiateDynamic> commentDynamicList = initiateDynamicList.stream().filter(initiateDynamic -> 
			initiateDynamic.getType()==1
		).collect(Collectors.toList());
		if (commentDynamicList.size() == 0) {
			return Lists.newArrayList();
		}
		List<DynamicReceiveDto> dynamicDtos = Lists.newArrayList();
		commentDynamicList.forEach(commentDynamic -> {
			Articale articale = commentMapper.getArtById(commentDynamic.getTypeId());
			Comment comment = commentMapper.getByIdWithUser(commentDynamic.getTypeId());
			CommentDto commentDto = DtoUtil.adapt(new CommentDto(), comment);
			commentDto.formatNoSecondTime();
			commentDto.setTimeAgo(TimeAgoUtils.format(commentDto.getCreateTime()));
			DynamicReceiveDto dynamicDto = DynamicReceiveDto.builder()
								.articaleDto(DtoUtil.adapt(new ArticaleDto(), articale))
								.commentDto(commentDto)
								.userInitiateDynamic(commentDynamic).build();
			dynamicDtos.add(dynamicDto);
		});
		return dynamicDtos;
	}

}
