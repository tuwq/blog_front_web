package root.service;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.ShowUserDto;
import root.dto.UserDto;
import root.exception.NotFoundException;
import root.mapper.UserMapper;
import root.model.User;
import root.util.DtoUtil;
import root.util.IpUtil;
import root.util.ThreadUtil;

@Service
public class InformartionService {

	@Resource
	private TokenService tokenService;
	@Resource
	private UserMapper userMapper; 
	
	public JsonResult<ShowUserDto> userinfo(Integer id) {
		// 检查字段，访问id不存在去404
		// 检查资源是否存在,不存在去404
		// 检查用户身份
		// 是否是本人token中的id
		// 情况,是本人,未登录的游客,他人用户
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
				ShowUserDto showUserDto = ShowUserDto.builder().identity(1).userDto(userDto).build();
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
		ShowUserDto showUserDto = ShowUserDto.builder().identity(2).userDto(userDto).build();
		return JsonResult.<ShowUserDto>success(showUserDto);
	}

}
