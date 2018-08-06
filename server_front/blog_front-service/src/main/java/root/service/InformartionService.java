package root.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.ShowFollowDto;
import root.dto.ShowUserDto;
import root.dto.UserDto;
import root.exception.NotFoundException;
import root.mapper.UserFollowMapper;
import root.mapper.UserInitiateDynamicMapper;
import root.mapper.UserMapper;
import root.model.User;
import root.model.UserFollow;
import root.util.DtoUtil;
import root.util.IpUtil;
import root.util.ThreadUtil;

@Service
public class InformartionService {

	@Resource
	private TokenService tokenService;
	@Resource
	private UserMapper userMapper; 
	@Resource
	private UserFollowMapper userFollowMapper;
	@Resource
	private UserInitiateDynamicMapper userInitiateDynamicMapper;
	
	public JsonResult<ShowUserDto> userinfo(Integer id) {
		// 检查字段，访问id不存在去404
		// 检查资源是否存在,不存在去404
		// 检查用户身份
		// 是否是本人token中的id
		// 情况,是本人,未登录的游客,他人用户
		// 本人时，不获取关注信息
		// 游客时，默认不关注
		// 他人用户获取关注信息
		if (id == null) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"资源id为空");
		} 
		int count = userMapper.countById(id);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户无法找到");
		}
		Integer userId = tokenService.checkToken();
		if (userId != null) {
			if (userId == id) {
				User me = userMapper.selectByPrimaryKey(userId);
				UserDto userDto = DtoUtil.adapt(new UserDto(), me);
				userDto.setPassword("");
				userDto.setActivationCode("");
				userDto.setBeforeLoginIp(userDto.getNowLoginIp());
				userDto.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
				userDto.setOperateTime(new Date());
				Integer followsSum = userFollowMapper.countByFromId(id);
				Integer fansSum = userFollowMapper.countByTargetId(id);
				Long dynamicInitiateSum = userInitiateDynamicMapper.countByInitiateUserId(id);
				ShowUserDto showUserDto = ShowUserDto.builder().identity(1).userDto(userDto)
						.followStatus(0).fansSum(fansSum).followsSum(followsSum)
						.dynamicInitiateSum(dynamicInitiateSum).build();
				return JsonResult.<ShowUserDto>success(showUserDto);
			} else {
				User others = userMapper.selectByPrimaryKey(id);
				UserDto userDto = DtoUtil.adapt(new UserDto(), others);
				userDto.setPassword("");
				userDto.setActivationCode("");
				userDto.setUsername("");
				userDto.setEmail("");
				userDto.setBeforeLoginIp("");
				userDto.setNowLoginIp("");
				Integer followsSum = userFollowMapper.countByFromId(id);
				Integer fansSum = userFollowMapper.countByTargetId(id);
				Long dynamicInitiateSum = userInitiateDynamicMapper.countByInitiateUserId(id);
				ShowUserDto showUserDto = ShowUserDto.builder().identity(2).userDto(userDto)
						.fansSum(fansSum).followsSum(followsSum).dynamicInitiateSum(dynamicInitiateSum).build();
				UserFollow connection = userFollowMapper.getByFromIdAndTargetId(userId, id);
				if (connection != null) {
					showUserDto.setFollowStatus(connection.getFollowStatus());
				} else {
					showUserDto.setFollowStatus(0);
				}
				return JsonResult.<ShowUserDto>success(showUserDto);
			}
		}
		User others = userMapper.selectByPrimaryKey(id);
		UserDto userDto = DtoUtil.adapt(new UserDto(), others);
		userDto.setPassword("");
		userDto.setActivationCode("");
		userDto.setUsername("");
		userDto.setEmail("");
		userDto.setBeforeLoginIp("");
		userDto.setNowLoginIp("");
		Integer followsSum = userFollowMapper.countByFromId(id);
		Integer fansSum = userFollowMapper.countByTargetId(id);
		Long dynamicInitiateSum = userInitiateDynamicMapper.countByInitiateUserId(id);
		ShowUserDto showUserDto = ShowUserDto.builder().identity(2).userDto(userDto)
				.fansSum(fansSum).fansSum(fansSum).dynamicInitiateSum(dynamicInitiateSum).build();
		showUserDto.setFollowStatus(0);
		return JsonResult.<ShowUserDto>success(showUserDto);
	}

	public JsonResult<List<ShowFollowDto>> userfans(Integer id) {
		// 检查字段
		// 检查资源是否存在,不存在去404
		// 是否是本人token中的id
		// 情况,是本人,未登录的游客,他人用户
		// 本人,他人,获取每个粉丝的信息,并展示我是否关注他们的状态
		// 游客，获取每个粉丝的信息,对他们都展示不关注
		if (id == null) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"资源id为空");
		} 
		int count = userMapper.countById(id);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户无法找到");
		}
		Integer userId = tokenService.checkToken();
		List<ShowFollowDto> showFollowDtos = Lists.newArrayList();
		List<Integer> fromIdList = userFollowMapper.getFromIdListByTargetId(id);
		if (fromIdList.size() == 0) {
			return JsonResult.<List<ShowFollowDto>>success(showFollowDtos);
		}
		List<User> userList = userMapper.getListByIdList(fromIdList);
		if (userId != null) {	
			userList.forEach(user -> {
				Integer status = userFollowMapper.getStatusByFromId(userId,user.getId());
				if (status == null) {
					status = 0;
				}
				UserDto userDto = DtoUtil.adapt(new UserDto(), user);
				ShowFollowDto followDto = ShowFollowDto.builder().followStatus(status).userDto(userDto).build();
				showFollowDtos.add(followDto);
			});
			return JsonResult.<List<ShowFollowDto>>success(showFollowDtos);
		} else {
			userList.forEach(user -> {
				UserDto userDto = DtoUtil.adapt(new UserDto(), user);
				ShowFollowDto followDto = ShowFollowDto.builder().followStatus(0).userDto(userDto).build();
				showFollowDtos.add(followDto);
			});
			return JsonResult.<List<ShowFollowDto>>success(showFollowDtos);
		}
	}

	public JsonResult<List<ShowFollowDto>> userfollows(Integer id) {
		// 检查字段
		// 检查资源是否存在,不存在去404
		// 是否是本人token中的id
		// 情况,是本人,未登录的游客,他人用户
		// 本人,他人,获取每个被关注者的信息,并展示我是否关注他们的状态
		// 游客，获取每个被关注者的信息,对他们都展示不关注
		if (id == null) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"资源id为空");
		} 
		int count = userMapper.countById(id);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"用户无法找到");
		}
		Integer userId = tokenService.checkToken();
		List<ShowFollowDto> showFollowDtos = Lists.newArrayList();
		List<Integer> targetIdList = userFollowMapper.getTargetIdListByFromId(id);
		if (targetIdList.size() == 0) {
			return JsonResult.<List<ShowFollowDto>>success(showFollowDtos);
		}
		List<User> userList = userMapper.getListByIdList(targetIdList);
		if (userId != null) {
			userList.forEach(user -> {
				Integer status = userFollowMapper.getStatusByFromId(userId,user.getId());
				if (status == null) {
					status = 0;
				}
				UserDto userDto = DtoUtil.adapt(new UserDto(), user);
				ShowFollowDto followDto = ShowFollowDto.builder().followStatus(status).userDto(userDto).build();
				showFollowDtos.add(followDto);
			});
			return JsonResult.<List<ShowFollowDto>>success(showFollowDtos);
		} else {
			userList.forEach(user -> {
				UserDto userDto = DtoUtil.adapt(new UserDto(), user);
				ShowFollowDto followDto = ShowFollowDto.builder().followStatus(0).userDto(userDto).build();
				showFollowDtos.add(followDto);
			});
			return JsonResult.<List<ShowFollowDto>>success(showFollowDtos);
		}
	}

}
