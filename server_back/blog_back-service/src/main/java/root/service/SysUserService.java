package root.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.constant.ResultCode;
import root.dto.SysUserDto;
import root.exception.LoginTokenException;
import root.mapper.SysUserMapper;
import root.model.SysUser;

@Service
public class SysUserService {

	@Resource
	private TokenService tokenService;
	@Resource
	private SysUserMapper sysUserMapper;
	
	public SysUserDto info() {
		Integer userId = tokenService.checkToken();
		if (userId != null) {
			SysUser dbUser = sysUserMapper.InfoById(userId);
			dbUser.setPassword("");
			return SysUserDto.adapt(dbUser);
		}
		// token过期了
		throw new LoginTokenException(ResultCode.TOKEN_MATURITY,"token到期了");
	}
	
}
