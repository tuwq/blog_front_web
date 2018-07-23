package root.service;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.constant.RedisCode;
import root.exception.LoginTokenException;
import root.redis.RedisOperator;
import root.util.JwtUtil;
import root.util.ThreadUtil;

@Service
public class TokenService {
	
	@Resource
	private RedisOperator redis;
	
	public Integer checkToken() {
		// 取出token,是否为空
		// 解析token,是否伪造不存在
		// 获得userId
		// 获得redis中的token
		// 是否一致
		// 返回userId
		String LOGIN_TOKEN = ThreadUtil.getCurrentRequest().getHeader("login_token");
		if (StringUtils.isNotBlank(LOGIN_TOKEN)) {
			Map<String, String> verifyToken = JwtUtil.verifyToken(LOGIN_TOKEN);
			String userId = verifyToken.get("userId");	
			String dbToken = redis.get(RedisCode.LOGIN_TOKEN+":"+ userId);
			if(LOGIN_TOKEN.equals(dbToken)) {
				// 正确的token
				System.out.println(userId+":==========================================================");
				return Integer.parseInt(userId);
			}
		}
		throw new LoginTokenException("LOGIN_TOKEN到期了");
	}	
}
