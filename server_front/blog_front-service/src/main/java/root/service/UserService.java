package root.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.io.Files;

import root.beans.JsonResult;
import root.constant.ResultCode;
import root.dto.UserDto;
import root.exception.CheckParamException;
import root.exception.TokenException;
import root.mapper.UserMapper;
import root.mapper.UserReceiveDynamicMapper;
import root.model.User;
import root.param.BasisSettingParam;
import root.param.SecuritySettingParam;
import root.util.DtoUtil;
import root.util.IpUtil;
import root.util.MD5Util;
import root.util.RegExUtil;
import root.util.ThreadUtil;
import root.util.ValidatorUtil;

@Service
public class UserService {

	@Resource
	private TokenService tokenService;
	@Resource
	private UserMapper userMapper;
	@Resource
	private QiNiuService qiNiuService;
	@Resource
	private UserReceiveDynamicMapper userReceiveDynamicMapper;
	
	public JsonResult<UserDto> info() {
		// 检查token获得id
		// 获取用户信息返回
		// 过期时返回token过期状态码给前端进行处理
		// 获得新的动态消息
		Integer userId = tokenService.checkToken();
		if (userId != null) {
			User user = userMapper.InfoById(userId);
			Long dynamicReceiveSum = userReceiveDynamicMapper.countByReceiveUserIdAndVisit(userId);
			UserDto userDto = DtoUtil.adapt(new UserDto(), user);
			userDto.setPassword("");
			userDto.setActivationCode("");
			userDto.setNewDynamicReceiveSum(dynamicReceiveSum);
			return JsonResult.<UserDto>success(userDto);
		}
		// token过期了
		throw new TokenException(ResultCode.TOKEN_MATURITY,"token到期了");
	}

	@Transactional
	public JsonResult<String> avatar(MultipartFile file) {
		// TODO token拦截器
		// 检查字段
		// 检查token
		// 将图片覆盖上传至七牛云，图片名md5加密userId.jpg
		// 将文件名返回 image/jpeg image/png
		if (file.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!file.getContentType().equals("image/jpeg") && !file.getContentType().equals("image/png")) {
			throw new CheckParamException("文件类型错误","请上传jpg或png文件类型的文件");
		}
		Integer userId = ThreadUtil.getCurrentUserId();
		qiNiuService.avatar(file,MD5Util.encrypt(Integer.toString(userId)));
		String originName = file.getOriginalFilename();
		String avatar = MD5Util.encrypt(Integer.toString(userId))+originName.substring(originName.lastIndexOf("."))+"?v="+new Date().getTime();
		User user = userMapper.selectByPrimaryKey(userId);
		if(user == null) {
			throw new TokenException(ResultCode.TOKEN_NOTUSER,"token和reids解析到的用户不存在");
		}
		user.setAvatar(avatar);
		user.setBeforeLoginIp(user.getNowLoginIp());
		user.setNowLoginIp(IpUtil.getUserIP(ThreadUtil.getCurrentRequest()));
		user.setOperateTime(new Date());
		userMapper.updateByPrimaryKeySelective(user);
		return JsonResult.<String>success(avatar);
	}

	public void basisSetting(BasisSettingParam param) {
		// 检查字段
		// 获取当前用户id
		// 修改用户信息
		// 保存信息
		// 是否存在相同昵称的用户
		ValidatorUtil.check(param);
		Integer userId = ThreadUtil.getCurrentUserId();
		User user = userMapper.selectByPrimaryKey(userId);
		user.setWebsite(param.getWebsite());
		user.setDesc(param.getDesc());
		user.setBeforeLoginIp(user.getNowLoginIp());
		user.setNowLoginIp(IpUtil.getUserIP(ThreadUtil.getCurrentRequest()));
		user.setOperateTime(new Date());
		userMapper.updateByPrimaryKeySelective(user);
		if (user.getNickname().equals(param.getNickname())) {
			return;
		} else {
			int count = userMapper.countByNickName(param.getNickname());
			if (count != 0) {
				throw new CheckParamException("昵称","已被使用,但其他信息修改成功");
			} else {
				user.setNickname(param.getNickname());
				userMapper.updateByPrimaryKeySelective(user);
			}
		}
	}

	public void securitySetting(SecuritySettingParam param) {
		// 检查字段
		// 检查两次密码是否输入一致
		// 获得用户id
		// id查找用户
		// 比对邮箱是否正确
		// 修改用户信息
		// 保存信息
		ValidatorUtil.check(param);
		if(!RegExUtil.RegExMail(param.getEmail())) {
			throw new CheckParamException("邮箱","格式不正确");
		}
		if (!param.getPassword().equals(param.getRepassword())) {
			throw new CheckParamException("两次密码","不一致");
		} 
		Integer userId = ThreadUtil.getCurrentUserId();
		User user = userMapper.selectByPrimaryKey(userId);
		if (!user.getEmail().equals(param.getEmail())) {
			throw new CheckParamException("邮箱","错误");
		}
		user.setPassword(MD5Util.encrypt(param.getPassword()));
		user.setBeforeLoginIp(user.getNowLoginIp());
		user.setNowLoginIp(IpUtil.getUserIP(ThreadUtil.getCurrentRequest()));
		user.setOperateTime(new Date());
		userMapper.updateByPrimaryKeySelective(user);
	}

	public JsonResult<UserDto> editInfo() {
		Integer userId = ThreadUtil.getCurrentUserId();
		User user = userMapper.InfoById(userId);
		user.setPassword("");
		user.setActivationCode("");
		return JsonResult.<UserDto>success(DtoUtil.adapt(new UserDto(), user));
	}
}
