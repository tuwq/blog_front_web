package root.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.mapper.UserMapper;
import root.model.User;

@Service
public class TestService {
	
	@Resource
	private UserMapper userMapper;
	
	public List<User> getAll() {
		return userMapper.getAll();
	}
}
