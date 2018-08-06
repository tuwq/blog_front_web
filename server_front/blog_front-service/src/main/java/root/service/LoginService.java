package root.service;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.Calendar;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.ImmutableMap;

import root.beans.JsonResult;
import root.constant.RedisCode;
import root.constant.ResultCode;
import root.dto.LoginDto;
import root.dto.UserDto;
import root.exception.ActivationException;
import root.exception.CheckParamException;
import root.mapper.UserMapper;
import root.model.User;
import root.param.LoginParam;
import root.param.RegistParam;
import root.param.UpdatePassParam;
import root.redis.RedisOperator;
import root.util.DtoUtil;
import root.util.IpUtil;
import root.util.JwtUtil;
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
	private TokenService tokenService;
	@Resource
	private RedisOperator redis;
	@Value("${mailTimeoutMINUTE}")
	private Integer mailTimeoutMINUTE;
	@Value("${mailActivationApiName}")
	private String mailActivationApiName;
	@Value("${mailMessageUrl}")
	private String mailMessageUrl;
	@Value("${defaultAvatarname}")
	private String defaultAvatarname;
	@Value("${updatePassUrl}")
	private String updatePassUrl;
	
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
		String randomKey = MD5Util.encrypt(param.getEmail()+TimeUtil.getSkipTime(Calendar.MINUTE, mailTimeoutMINUTE));
		redis.set(RedisCode.EMAIL_ACTIVATION_CODE+":"+randomKey, param.getEmail(),mailTimeoutMINUTE*60);
		String content = 
				"您的登录邮箱为"+param.getEmail()+",点击链接激活账号 "+mailActivationApiName+"?key="+randomKey
				+ " 若点击无效，请将内容复制放入浏览器地址栏当中,不是本人操作请忽略此邮件";
		mailService.sendSimpleMail("激活邮件", content, param.getEmail());
		User user = User.builder()
					.username(param.getUsername())
					.nickname(param.getUsername())
					.avatar(defaultAvatarname)
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
				} catch (IOException e) {throw new ActivationException("激活邮件重定向失败");}
			}
			String randomKey = MD5Util.encrypt(user.getEmail()+TimeUtil.getSkipTime(Calendar.MINUTE, mailTimeoutMINUTE));
			redis.set(RedisCode.EMAIL_ACTIVATION_CODE+":"+randomKey, user.getEmail(),mailTimeoutMINUTE*60);
			user.setBeforeLoginIp(user.getNowLoginIp());
			user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
			user.setOperateTime(new Date());
			user.setActivationCode(randomKey);
			userMapper.updateByPrimaryKeySelective(user);
			String content = 
					"激活重试,您的登录邮箱为"+user.getEmail()+",点击链接激活账号 "+mailActivationApiName+"?key="+randomKey
					+ " 若点击无效，请将内容复制放入浏览器地址栏当中,不是本人操作请忽略此邮件";
			mailService.sendSimpleMail("激活邮件", content, user.getEmail());
			try {
				response.sendRedirect(mailMessageUrl+""
							+ "?message="+URLEncoder.encode("激活时间过期,已经重新向 ","UTF-8")+user.getEmail()+URLEncoder.encode("发送了激活邮件","UTF-8"));
			} catch (IOException e) {throw new ActivationException("激活邮件重定向失败");}
		} else {
			User user = userMapper.getByEmail(redisEmail);
			if (user == null) {
				try {
					response.sendRedirect(mailMessageUrl
								+ "?message="+URLEncoder.encode("密钥已过期或不存在","UTF-8"));
					return;
				} catch (IOException e) {throw new ActivationException("激活邮件重定向失败");}
			}
			if(user.getActivationStatus() == 1) {
				try {
					response.sendRedirect(mailMessageUrl
								+ "?message="+URLEncoder.encode("账号以激活","UTF-8"));
					return;
				} catch (IOException e) {throw new ActivationException("激活邮件重定向失败");}
			}
			user.setActivationStatus(1);
			user.setBeforeLoginIp(user.getNowLoginIp());
			user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
			user.setOperateTime(new Date());
			userMapper.updateByPrimaryKeySelective(user);
			try {
				redis.del(RedisCode.EMAIL_ACTIVATION_CODE+":"+key);
				response.sendRedirect(mailMessageUrl
							+ "?message="+URLEncoder.encode("激活成功2秒后跳转到登陆页","UTF-8")+"&flag=1");
			} catch (IOException e) {throw new ActivationException("激活邮件重定向失败");}
		}
	}

	@Transactional
	public JsonResult<?> login(LoginParam param) {
		// 检查字段
		// 用户是否存在，输入的可能是用户名也有可能是有邮箱
		// 检查密码
		// 得到用户检查激活状态，未激活重新发送邮件并抛出异常
		// 生成jwt，以(userId,jwt)的形式存储在redis中，不设置过期时间
		// 将token和用户信息返回前端，前端把token放入localStorage或cookie
		// 自定义的异常被自己advice捕获也会被spring回滚
		ValidatorUtil.check(param);
		int count = userMapper.countByUsernameOrEmail(param);
		if (count == 0) {
			throw new CheckParamException("登录账户","不存在");
		}
		User user = userMapper.getByUsernameOrEmail(param);
		if(!user.getPassword().equals(MD5Util.encrypt(param.getPassword()))) {
			throw new CheckParamException("密码","错误");
		}
		if (user.getActivationStatus() == 0) {
			String randomKey = MD5Util.encrypt(user.getEmail()+TimeUtil.getSkipTime(Calendar.MINUTE, mailTimeoutMINUTE));
			redis.set(RedisCode.EMAIL_ACTIVATION_CODE+":"+randomKey, user.getEmail(),mailTimeoutMINUTE*60);
			user.setBeforeLoginIp(user.getNowLoginIp());
			user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
			user.setOperateTime(new Date());
			user.setActivationCode(randomKey);
			userMapper.updateByPrimaryKeySelective(user);
			String content = 
					"激活重试,您的登录邮箱为"+user.getEmail()+",点击链接激活账号 "+mailActivationApiName+"?key="+randomKey
					+ " 若点击无效，请将内容复制放入浏览器地址栏当中,不是本人操作请忽略此邮件";
			mailService.sendSimpleMail("激活邮件", content, user.getEmail());
			return JsonResult.error(ResultCode.EMAIL_MATURITY,"账户未激活邮箱已经重新向"+user.getEmail()+"发送了一封新激活邮件");
		}
		user.setBeforeLoginIp(user.getNowLoginIp());
		user.setNowLoginIp(IpUtil.getRemoteIp(ThreadUtil.getCurrentRequest()));
		user.setOperateTime(new Date());;
		userMapper.updateByPrimaryKeySelective(user);
		String token = JwtUtil.getToken(ImmutableMap.of(
				"userId",Integer.toString(user.getId()),
				"email",user.getEmail()));
		redis.set(RedisCode.TOKEN+":"+Integer.toString(user.getId()),token);
		user.setPassword("");
		user.setActivationCode("");
		LoginDto dto = LoginDto.builder().token(token).userDto(DtoUtil.adapt(new UserDto(), user)).build();
		return JsonResult.success(dto);
	}

	public JsonResult<Void> logout() {
		Integer userId = tokenService.checkToken();
		if (userId != null) {
			redis.del(RedisCode.TOKEN+":"+ userId);
			return JsonResult.<Void>success();
		}
		return JsonResult.<Void>error(ResultCode.TOKEN_MATURITY);
	}

	public void findPass(String email) {
		// 检查字段
		// 检查邮箱格式
		// 寻找邮箱的用户是否存在
		// 通过用户的邮箱加密和id过期时间生成密钥
		// 以(密钥,email)形式放入redis中,设置过期时间
		// 以服务器接口地址+请求url?key=密钥的形式发送内容
		// 发送内容给目标邮箱
		if (StringUtils.isBlank(email)||email == null) {
			throw new CheckParamException("邮箱","内容为空");
		}
		if(!RegExUtil.RegExMail(email)) {
			System.out.println(email+"..");
			throw new CheckParamException("邮箱","格式不正确");
		}
		int count = userMapper.countByEmail(email);
		if (count == 0) {
			throw new CheckParamException("邮箱用户","不存在");
		}
		User user = userMapper.getByEmail(email);
		String randomKey = MD5Util.encrypt(user.getEmail()+user.getId()+TimeUtil.getSkipTime(Calendar.MINUTE, mailTimeoutMINUTE));
		redis.set(RedisCode.EMAIL_FIND_PASS_CODE+":"+randomKey, email,mailTimeoutMINUTE*60);
		String content = 
				"您的找回密码的邮箱为"+user.getEmail()+",点击链接激活账号 "+updatePassUrl+"/"+randomKey
				+ " 若点击无效，请将内容复制放入浏览器地址栏当中,不是本人操作请忽略此邮件";
		mailService.sendSimpleMail("找回密码邮件", content, user.getEmail());
	}

	@Transactional
	public void updatePass(UpdatePassParam param) {
		// 检查字段
		// 检查密码是否一致
		// 根据密钥从redis中获取邮箱
		// 密钥是否取出邮箱
		// 给邮箱的用户修改密码
		// 删除redis中的密钥
		ValidatorUtil.check(param);
		if (!param.getPassword().equals(param.getRePassword())) {
			throw new CheckParamException("两次密码","不一致");
		}
		String redisEmail = redis.get(RedisCode.EMAIL_FIND_PASS_CODE+":"+param.getKey());
		if (redisEmail == null) {
			throw new CheckParamException("修改时间以过期","请重新发送邮件");
		} else {
			User user = userMapper.getByEmail(redisEmail);
			userMapper.updatePass(user.getId(),MD5Util.encrypt(param.getPassword()));
			redis.del(RedisCode.EMAIL_FIND_PASS_CODE+":"+param.getKey());
		}
	}
}
