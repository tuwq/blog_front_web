package root.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.dto.CommentDto;
import root.dto.UserDto;
import root.exception.CheckParamException;
import root.mapper.UserMapper;
import root.model.User;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.ValidatorUtil;

@Service
public class UserManageService {

	@Resource
	private UserMapper userMapper;
	
	public PageResult<UserDto> page(PageParam param) {
		// 检查字段
		// 获得总数
		// 生成skip
		// 获得用户的信息
		// 生成分页数据
		ValidatorUtil.check(param);
		Long total = userMapper.countAll();
		if (total == 0) {
			return PageResult.<UserDto>builder().code(200).data(Lists.newArrayList()).pageModel(new PageModel()).build();
		}
		param.buildSkip();
		List<User> data = userMapper.page(param.getSkip(),param.getPageSize());
		List<UserDto> userDtos = Lists.newArrayList();
		data.forEach(user -> {
			UserDto userDto = DtoUtil.adapt(new UserDto(), user);
			userDto.formatNoSecondTime();
			userDtos.add(userDto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<UserDto>builder().data(userDtos).pageModel(pageModel).code(200).build();
	}

	public PageResult<UserDto> search(String keyword, PageParam param) {
		// 检查字段
		// 获得条件搜索总数
		// 生成skip
		// 根据搜索条件获得用户信息
		// 生成分页数据
		ValidatorUtil.check(param);
		if (keyword == null) {
			throw new CheckParamException("关键字","不能为空");
		}
		Long total = userMapper.countByKeyWord(keyword);
		if (total == 0) {
			return PageResult.<UserDto>builder().code(200).data(Lists.newArrayList()).pageModel(new PageModel()).build();
		}
		param.buildSkip();
		List<User> data = userMapper.pageByKeyword(param.getSkip(),param.getPageSize(),keyword);
		List<UserDto> userDtos = Lists.newArrayList();
		data.forEach(user -> {
			UserDto userDto = DtoUtil.adapt(new UserDto(), user);
			userDto.formatNoSecondTime();
			userDtos.add(userDto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<UserDto>builder().data(userDtos).pageModel(pageModel).code(200).build();
	}

	@Transactional
	public void updateBatch(String idsStr) {
		// 批量修改用户的禁言状态
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
		.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		if(ids.size()==0) {throw new CheckParamException("选择id","为空");}
		userMapper.updateBatch(ids);
	}

}
