package root.async;

import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import root.configConstant.BlogConfigProperties;
import root.constant.RedisCode;
import root.model.Access;
import root.redis.RedisOperator;
import root.util.IpUtil;
import root.util.JsonUtils;

@Service
public class AccessDataHandler {

	@Resource
	private RedisOperator redis;
	@Resource
	private BlogConfigProperties blogConfigProperties;
	
	@Async
	public void saveIp(HttpServletRequest request) {
		// 获得客户端Ip
		// 保存对象放入redis中
		String ip = IpUtil.getIpAddress(request);
		Access access = Access.builder().ipAddress(ip).createTime(new Date()).build();
		redis.hset(RedisCode.IP_STORAGE,RedisCode.IP_CODE+":"+ip, JsonUtils.objectToJson(access));
	}
	
}
