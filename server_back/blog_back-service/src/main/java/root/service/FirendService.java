package root.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;

import root.beans.JsonResult;
import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.RedisCode;
import root.dto.CommentDto;
import root.dto.FirendDto;
import root.exception.CheckParamException;
import root.mapper.FriendMapper;
import root.model.Friend;
import root.model.FrontImgConfig;
import root.param.AddFriendParam;
import root.param.EditFriendParam;
import root.param.FirendParam;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.MD5Util;
import root.util.ValidatorUtil;

@Service
public class FirendService {

	@Resource
	private FriendMapper firendMapper;
	@Resource
	private QiNiuIMGService qiNiuIMGService;
	
	@Transactional
	public void add(MultipartFile file, String nickname, String website, String desc) {
		// 检查字段
		// 插入数据
		// 上传图片
		// 修改数据
		if (StringUtils.isBlank(nickname) || StringUtils.isBlank(website)) {
			throw new CheckParamException("昵称,网站不能为空");
		}
		if (file.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!file.getContentType().equals("image/jpeg") && !file.getContentType().equals("image/png")) {
			throw new CheckParamException("文件类型错误","请上传jpg或png文件类型的文件");
		}
		Friend firend = Friend.builder().nickname(nickname).website(website).desc(desc).build();
		firendMapper.insertSelective(firend);
		Integer fid = firend.getId();
		String originName = file.getOriginalFilename();
		// fid.jpg
		String avatar = MD5Util.encryPassword(Integer.toString(fid)) + originName.substring(originName.lastIndexOf("."));
		qiNiuIMGService.uploadFirendAvatar(file,avatar);
		firend.setAvatar(avatar+"?v="+new Date().getTime());
		firendMapper.updateByPrimaryKeySelective(firend);
	}

	public PageResult<FirendDto> page(PageParam param) {
		// 检查字段
		// 获得总数
		// 生成skip
		// 获取数据
		// 返回分页数据
		ValidatorUtil.check(param);
		Long total = firendMapper.countAll();
		if (total == 0) {
			return PageResult.<FirendDto>builder().code(200).data(Lists.newArrayList()).pageModel(new PageModel()).build();
		}
		param.buildSkip();
		List<Friend> data = firendMapper.page(param.getSkip(),param.getPageSize());
		List<FirendDto> firendDtos = Lists.newArrayList();
		data.forEach(item -> {
			FirendDto dto = DtoUtil.adapt(new FirendDto(), item);
			dto.formatNoSecondTime();
			firendDtos.add(dto);
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<FirendDto>builder().data(firendDtos).pageModel(pageModel).code(200).build();
	}

	@Transactional
	public JsonResult<String> updateAvatar(MultipartFile file, Integer id) {
		if (file.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!file.getContentType().equals("image/jpeg") && !file.getContentType().equals("image/png")) {
			throw new CheckParamException("文件类型错误","请上传jpg或png文件类型的文件");
		}
		String originName = file.getOriginalFilename();
		String avatar = MD5Util.encryPassword(Integer.toString(id)) + originName.substring(originName.lastIndexOf("."));
		qiNiuIMGService.uploadFirendAvatar(file,avatar);
		Friend friend = firendMapper.selectByPrimaryKey(id);
		friend.setAvatar(avatar+"?v="+new Date().getTime());
		firendMapper.updateByPrimaryKeySelective(friend);
		return JsonResult.<String>success(avatar+"?v="+new Date().getTime());
	}

	@Transactional
	public void delBatch(String idsStr) {
		// 批量删除友链
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
				.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		if(ids.size()==0) {throw new CheckParamException("选择id","为空");}
		ids.stream().forEach(id -> {
			Friend firend = firendMapper.selectByPrimaryKey(id);
			// qiNiuIMGService.delFirendAvatar(firend.getAvatar());
		});
		firendMapper.delBatch(ids);
	}

	public JsonResult<FirendDto> info(Integer id) {
		// 检查字段
		if (id == null) {
			throw new CheckParamException("id","为空");
		}
		int count = firendMapper.countById(id);
		if (count == 0) {
			throw new CheckParamException("内容","不存在");
		}
		Friend firend = firendMapper.info(id);
		FirendDto dto = DtoUtil.adapt(new FirendDto(), firend);
		dto.formatNoSecondTime();
		return JsonResult.<FirendDto>success(dto);
	}

	@Transactional
	public void edit(FirendParam param) {
		// 检查字段
		// 是否存在
		// 修改数据
		ValidatorUtil.check(param);
		int count = firendMapper.countById(param.getId());
		if (count == 0) {
			throw new CheckParamException("内容","不存在");
		}
		Friend firend = Friend.builder().id(param.getId()).website(param.getWebsite())
			.desc(param.getDesc()).nickname(param.getNickname()).build();
		firendMapper.updateByPrimaryKeySelective(firend);
	}

    public void insert(AddFriendParam param) {
		Friend firend = Friend.builder().nickname(param.getNickname())
				.website(param.getWebsite()).desc(param.getDesc()).avatar(param.getAvatarSite()).build();
		firendMapper.insertSelective(firend);
    }

	public void update(EditFriendParam param) {
		int count = firendMapper.countById(param.getId());
		if (count == 0) {
			throw new CheckParamException("内容","不存在");
		}
		Friend firend = Friend.builder().id(param.getId()).website(param.getWebsite())
				.desc(param.getDesc()).nickname(param.getNickname()).avatar(param.getAvatarSite()).build();
		firendMapper.updateByPrimaryKeySelective(firend);
	}
}
