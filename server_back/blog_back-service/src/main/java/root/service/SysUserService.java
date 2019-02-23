package root.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.constant.ResultCode;
import root.dto.ArticleDto;
import root.dto.SysUserDto;
import root.exception.TokenException;
import root.mapper.SysUserMapper;
import root.model.Article;
import root.model.ArticleCategory;
import root.model.SysUser;
import root.util.DtoUtil;

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
		throw new TokenException(ResultCode.TOKEN_MATURITY,"token到期了");
	}
	
}
