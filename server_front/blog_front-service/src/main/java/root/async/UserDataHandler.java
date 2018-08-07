package root.async;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import root.mapper.UserMapper;
import root.model.User;
import root.util.IpUtil;
import root.util.ThreadUtil;

@Service
public class UserDataHandler {

	@Resource
	private UserMapper userMapper;
	
	@Async
	public void recordOpear(Integer userId) {
		// 记录用户操作
		User user = userMapper.selectByPrimaryKey(userId);
		user.setOperateTime(new Date());
		user.setBeforeLoginIp(user.getNowLoginIp());
		user.setNowLoginIp(IpUtil.getUserIP(ThreadUtil.getCurrentRequest()));
		userMapper.insertSelective(user);
	}

}
