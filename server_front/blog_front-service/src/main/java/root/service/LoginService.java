package root.service;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.Calendar;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import root.beans.JsonResult;
import root.constant.RedisCode;
import root.exception.CheckParamException;
import root.mapper.UserMapper;
import root.model.User;
import root.param.RegistParam;
import root.redis.RedisOperator;
import root.util.IpUtil;
import root.util.MD5Util;
import root.util.RegExUtil;
import root.util.ThreadUtil;
import root.util.TimeUtil;
import root.util.ValidatorUtil;

@Service
public class LoginService {

	@Resource
	private UserMapper userMapper;
	@Resource
	private MailService mailService;
	@Resource
	private RedisOperator redis;
	@Value("${mailTimeoutMINUTE}")
	private Integer mailTimeoutMINUTE;
	@Value("${mailActivationApiName}")
	private String mailActivationApiName;
	@Value("${mailMessageUrl}")
	private String mailMessageUrl;
	
	@Transactional
	public void regist(RegistParam param) {
		// 检查字段
		// 查询是否存在账户
		// 通过加密email和过期时间生成密钥
		// 以(密钥,email)形式放入redis,设置过期时间
		// 以服务器接口地址+请求url?key=密钥的形式发送内容
		// 发送内容给目标邮箱
		// 将用户信息和密钥插入数据库
		ValidatorUtil.check(param);
		if(!RegExUtil.RegExMail(param.getEmail())) {
			throw new CheckParamException("邮箱","格式不正确");
		}
		int nameexist = userMapper.countByUsername(param.getUsername());
		if (nameexist != 0) {
			throw new CheckParamException("用户名","已被注册");
		}
		int emailexist = userMapper.countByEmail(param.getEmail());
		if (emailexist != 0) {
			throw new CheckParamException("邮箱","已被注册");
		}
		String randomKey = MD5Util.encrypt(param.getEmail()) + TimeUtil.getSkipTime(Calendar.MINUTE, mailTimeoutMINUTE);
		redis.set(RedisCode.EMAIL_ACTIVATION_CODE+":"+randomKey, param.getEmail(),mailTimeoutMINUTE*60);
		String content = 
				"您的登录邮箱为"+param.getEmail()+",点击链接激活账号 "+mailActivationApiName+"?key="+randomKey
				+ " 若点击无效，请将内容复制放入浏览器地址栏当中";
		mailService.sendSimpleMail("博客激活邮件", content, param.getEmail());
		User user = User.builder()
					.username(param.getUsername())
					.nickname(param.getUsername())
					.password(MD5Util.encrypt(param.getPassword()))
					.email(param.getEmail())
					.activationCode(randomKey)
					.nowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()))
					.createTime(new Date())
					.operateTime(new Date())
					.build();
		userMapper.insertSelective(user);
	}

	@Transactional
	public void activation(String key) {
		// 根据激活发过来的密钥从redis中得到email
		// 不存在说明过期或是伪造的的密钥,密钥查找用户,重新发送邮件设置密钥
		// 根据email从数据库得到用户
		// 设置激活状态等信息
		// 保存用户信息
		// 重定向到邮件成功失败的地址
		String redisEmail = redis.get(RedisCode.EMAIL_ACTIVATION_CODE+":"+key);
		HttpServletResponse response = ThreadUtil.getCurrentResponse();
		if (redisEmail == null) {
			User user = userMapper.getByActivationCode(key);
			if (user == null) {
				try {
					response.sendRedirect(mailMessageUrl
								+ "?message="+URLEncoder.encode("密钥已过期或不存在","UTF-8"));
					return;
				} catch (IOException e) {e.printStackTrace();}
			}
			String randomKey = MD5Util.encrypt(user.getEmail()) + TimeUtil.getSkipTime(Calendar.MINUTE, mailTimeoutMINUTE);
			redis.set(RedisCode.EMAIL_ACTIVATION_CODE+":"+randomKey, user.getEmail(),mailTimeoutMINUTE*60);
			user.setBeforeLoginIp(user.getNowLoginIp());
			user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
			user.setOperateTime(new Date());
			user.setActivationCode(randomKey);
			userMapper.updateByPrimaryKeySelective(user);
			String content = 
					"激活重试,您的登录邮箱为"+user.getEmail()+",点击链接激活账号 "+mailActivationApiName+"?key="+randomKey
					+ " 若点击无效，请将内容复制放入浏览器地址栏当中";
			mailService.sendSimpleMail("博客激活邮件", content, user.getEmail());
			try {
				response.sendRedirect(mailMessageUrl+""
							+ "?message="+URLEncoder.encode("激活时间过期,已经重新向 ","UTF-8")+user.getEmail()+URLEncoder.encode("发送了激活邮件","UTF-8"));
			} catch (IOException e) {e.printStackTrace();}
		} else {
			User user = userMapper.getByEmail(redisEmail);
			if (user == null) {
				try {
					response.sendRedirect(mailMessageUrl
								+ "?message="+URLEncoder.encode("密钥已过期或不存在","UTF-8"));
					return;
				} catch (IOException e) {e.printStackTrace();}
			}
			if(user.getActivationStatus() == 1) {
				try {
					response.sendRedirect(mailMessageUrl
								+ "?message="+URLEncoder.encode("账号以激活","UTF-8"));
					return;
				} catch (IOException e) {e.printStackTrace();}
			}
			user.setActivationStatus(1);
			user.setBeforeLoginIp(user.getNowLoginIp());
			user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
			user.setOperateTime(new Date());
			userMapper.updateByPrimaryKeySelective(user);
			try {
				response.sendRedirect(mailMessageUrl
							+ "?message="+URLEncoder.encode("激活成功2秒后跳转到登陆页","UTF-8")+"&flag=1");
			} catch (IOException e) {e.printStackTrace();}
		}
	}
	
}
