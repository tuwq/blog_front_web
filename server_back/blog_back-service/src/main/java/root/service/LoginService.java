package root.service;



import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.common.collect.ImmutableMap;

import root.beans.JsonResult;
import root.constant.CookieCode;
import root.constant.RedisCode;
import root.constant.ResultCode;
import root.dto.LoginDto;
import root.exception.CheckParamException;
import root.exception.LoginTokenException;
import root.mapper.SysUserMapper;
import root.model.SysUser;
import root.param.LoginParam;
import root.redis.RedisOperator;
import root.util.CookieUtil;
import root.util.JwtUtil;
import root.util.MD5Util;
import root.util.ThreadUtil;
import root.util.ValidatorUtil;

@Service
public class LoginService {

	@Resource
	private SysUserMapper sysUserMapper;
	@Resource
	private RedisOperator redis;
	@Value("${TOKEN_MAXAGE}")
	private Integer TOKEN_MAXAGE;
	
	public LoginDto login(LoginParam param) {
		// 检查字段
		// 是否存在用户
		// 得到用户检查密码
		// 生成jwt,放入redis (code+id,token)
		// 让前端把jwt放入cookie
		// 将token和用户信息放入dto返回
		ValidatorUtil.check(param);
		int count = sysUserMapper.CountfindByUsername(param.getUsername());
		if(count == 0) {
			throw new CheckParamException("用户名","不存在");
		}
		SysUser dbSysUser = sysUserMapper.findSysUserByUsername(param.getUsername());
		if(!MD5Util.encryPassword(param.getPassword()).equals(dbSysUser.getPassword())) {
			throw new CheckParamException("密码","错误");
		}
		dbSysUser.setPassword("");
		String token = JwtUtil.getToken(ImmutableMap.of("userId",Integer.toString(dbSysUser.getId())));
		redis.set(RedisCode.LOGIN_TOKEN+":"+Integer.toString(dbSysUser.getId()),token,TOKEN_MAXAGE);
		return LoginDto.builder().token(token).SysUser(dbSysUser).build();
	}

	public JsonResult<Void> quitlogin() {
		// 从header中获取token
		// 获取token解析出id
		// token可能是伪造的
		// 根据id获取redis中的token
		// 比对token是否一致
		// 删除redis中的token
		String LOGIN_TOKEN = ThreadUtil.getCurrentRequest().getHeader("login_token");
		if (StringUtils.isNotBlank(LOGIN_TOKEN)) {
			Map<String, String> verifyToken = JwtUtil.verifyToken(LOGIN_TOKEN,this.getClass(),this,"maturityToken");
			String userId = verifyToken.get("userId");	
			String dbToken = redis.get(RedisCode.LOGIN_TOKEN+":"+ userId);
			if(LOGIN_TOKEN.equals(dbToken)) {
				redis.del(RedisCode.LOGIN_TOKEN+":"+ userId);
				return JsonResult.<Void>success();
			}
			maturityToken();
		}
		return JsonResult.<Void>error(ResultCode.PARAM_MATURITY,"LOGIN_TOKEN过期了");
	}
	
	public void maturityToken() {
		// 处理token是伪造的
		// TODO 伪造TOKEN日志
		throw new LoginTokenException("LOGIN_TOKEN是伪造的");
	}
}
