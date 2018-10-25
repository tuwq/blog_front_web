package root.service;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import root.configConstant.BlogConfigProperties;
import root.constant.RedisCode;
import root.constant.ResultCode;
import root.exception.TokenException;
import root.redis.RedisOperator;
import root.util.JwtUtil;
import root.util.ThreadUtil;

@Service
public class TokenService {
	
	@Resource
	private RedisOperator redis;
	@Resource
	private BlogConfigProperties blogConfigProperties;
	
	public Integer checkToken() {
		// 取出token,是否为空
		// 解析token,是否伪造不存在
		// 获得userId，获得redis中的token，是否一致
		// 返回userId
		String TOKEN = ThreadUtil.getCurrentRequest().getHeader(blogConfigProperties.getToken().getTokenHeadName());
		if (StringUtils.isNotBlank(TOKEN)) {
			Map<String, String> verifyToken = JwtUtil.verifyToken(TOKEN);
			String userId = verifyToken.get("userId");	
			String dbToken = redis.get(RedisCode.TOKEN+":"+ userId);
			if(dbToken == null) {
				throw new TokenException(ResultCode.TOKEN_TOLOGIN,"token过期");
			}
			if(TOKEN.equals(dbToken)) {
				// 正确的token
				return Integer.parseInt(userId);
			} else {
				throw new TokenException(ResultCode.TOKEN_REDIS_NOT_MATCH,"TOKEN信息与redis中不符");
			}
		}
		return null;
	}	
}
