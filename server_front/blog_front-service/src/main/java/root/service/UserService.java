package root.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.UserDto;
import root.exception.TokenException;
import root.mapper.UserMapper;
import root.model.User;
import root.util.DtoUtil;

@Service
public class UserService {

	@Resource
	private TokenService tokenService;
	@Resource
	private UserMapper userMapper;
	
	public JsonResult<UserDto> info() {
		// 检查token获得id
		// 获取用户信息返回
		// 过期时返回token过期状态码给前端进行处理
		Integer userId = tokenService.checkToken();
		if (userId != null) {
			User user = userMapper.InfoById(userId);
			user.setPassword("");
			user.setActivationCode("");
			return JsonResult.<UserDto>success(DtoUtil.adapt(new UserDto(), user));
		}
		// token过期了
		throw new TokenException(ResultCode.TOKEN_MATURITY,"token到期了");
	}
}
