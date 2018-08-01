package root.service;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import root.exception.CheckParamException;
import root.mapper.UserFollowMapper;
import root.mapper.UserMapper;
import root.model.User;
import root.model.UserFollow;
import root.param.FollowParam;
import root.util.IpUtil;
import root.util.ThreadUtil;
import root.util.ValidatorUtil;

@Service
public class FollowService {

	@Resource
	private UserFollowMapper userFollowMapper;
	@Resource
	private UserMapper userMapper;
	
	@Transactional
	public void followUser(FollowParam param) {
		// 检查字段
		// 关注目标用户是否存在
		// 是否关注目标是当前用户
		// 是否存在已创建的关注关系
		// 创建或修改关注关系
		// 记录用户操作
		// TODO 记录动态操作
		ValidatorUtil.check(param);
		Integer userId = ThreadUtil.getCurrentUserId();
		int count = userMapper.countById(param.getFollowId());
		if (count == 0) {
			throw new CheckParamException("关注目标","不存在");
		}
		if (userId == param.getFollowId()) {
			throw new CheckParamException("关注错误","你不能关注你自己");
		}
		int connectionCount = userFollowMapper.countByFromIdAndTargetId(userId,param.getFollowId());
		if (connectionCount != 0) {
			UserFollow connection = userFollowMapper.getByFromIdAndTargetId(userId,param.getFollowId());
			connection.setFollowStatus(param.getFollowAction());
			userFollowMapper.updateByPrimaryKeySelective(connection);
		} else {
			UserFollow connection = UserFollow.builder()
			.fromId(userId)
			.targetId(param.getFollowId())
			.followStatus(param.getFollowAction())
			.build();
			userFollowMapper.insertSelective(connection);
		}
		User user = userMapper.selectByPrimaryKey(userId);
		user.setBeforeLoginIp(user.getNowLoginIp());
		user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
		user.setOperateTime(new Date());
		userMapper.updateByPrimaryKeySelective(user);
	}
}
