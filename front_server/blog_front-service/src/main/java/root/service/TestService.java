package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.exception.CheckParamException;
import root.mapper.UserMapper;
import root.model.User;
import root.redis.RedisOperator;

@Service
public class TestService {

	@Resource
	private UserMapper userMapper;
	@Resource
	private RedisOperator redis;
	
	
	public List<User> getAll() {
		// throw new CheckParamException("名字","不为空");
		redis.del("test");
		return userMapper.getAll();
	}
}
