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
import root.dto.ArticaleDto;
import root.dto.FirendDto;
import root.dto.SongDto;
import root.exception.CheckParamException;
import root.mapper.SongBindCategoryMapper;
import root.mapper.SongCategoryMapper;
import root.mapper.SongMapper;
import root.model.Category;
import root.model.Song;
import root.model.SongBindCategory;
import root.model.SongCategory;
import root.param.MusicParam;
import root.param.PageParam;
import root.util.DtoUtil;
import root.util.MD5Util;
import root.util.ValidatorUtil;

@Service
public class MusicService {

	@Resource
	private SongMapper songMapper;
	@Resource
	private SongBindCategoryMapper songBindCategoryMapper;
	@Resource
	private SongCategoryMapper songCategoryMapper;
	@Resource
	private QiNiuMusicService qiNiuMusicService;
	
	@Transactional
	public void add(MultipartFile cover, MultipartFile music, MusicParam param) {
		// 检查字段
		// 添加音乐和音乐分类绑定
		// 上传封面和音乐
		ValidatorUtil.check(param);
		if (cover.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!cover.getContentType().equals("image/jpeg") && !cover.getContentType().equals("image/png")) {
			throw new CheckParamException("文件类型错误","请上传jpg或png文件类型的封面");
		}
		if (music.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!music.getContentType().equals("audio/mp3")) {
			throw new CheckParamException("文件类型错误","请上传mp3文件类型的音乐文件");
		}
		Song song = Song.builder().songName(param.getSongName())
			.singer(param.getSinger()).lyric(param.getLyric())
			.weight(param.getWeight()).duration(param.getDuration()).build();
		songMapper.insertSelective(song);
		List<SongBindCategory> sbinList = Lists.newArrayList();
		param.getCategoryNames().stream().forEach( categoryId -> {
			SongBindCategory sbin = SongBindCategory.builder()
					.songId(song.getId()).songCategoryId(categoryId)
					.createTime(new Date()).updateTime(new Date()).build();
			sbinList.add(sbin);
		});
		songBindCategoryMapper.insertBatch(sbinList);
		
		Integer fid = song.getId();
		String coverName = cover.getOriginalFilename();
		String musicName = music.getOriginalFilename();
		String coverPath = MD5Util.encryPassword(Integer.toString(fid)) + coverName.substring(coverName.lastIndexOf("."));
		String musicPath = MD5Util.encryPassword(Integer.toString(fid)) + musicName.substring(musicName.lastIndexOf("."));
		qiNiuMusicService.cover(cover,coverPath);
		qiNiuMusicService.music(music,musicPath);
		song.setCover(coverPath);
		song.setUrl(musicPath);
		songMapper.updateByPrimaryKeySelective(song);
	}

	public PageResult<SongDto> page(PageParam param) {
		// 检查字段
		// 获得总数
		// 生成skip
		// 获得分页数据
		// 返回分页结果
		ValidatorUtil.check(param);
		Long total = songMapper.countAll();
		if (total == 0) {
			return PageResult.<SongDto>builder().code(200).data(Lists.newArrayList()).pageModel(new PageModel()).build();
		}
		param.buildSkip();
		List<Song> data = songMapper.page(param.getSkip(),param.getPageSize());
		List<Integer> ids = data.stream().map(song -> song.getId()).collect(Collectors.toList());
		for (int i = 0; i< ids.size();i++ ) {
			List<SongCategory> categoryList = songCategoryMapper.getListBySongId(ids.get(i));
			data.get(i).setSongCategoryList(categoryList);
		}
		List<SongDto> dtos = data.stream().map(item -> DtoUtil.adapt(new SongDto(), item)).collect(Collectors.toList());
		dtos.stream().forEach(dto -> {
			List<String> cateNameList = dto.getSongCategoryList().stream().map(item -> item.getName()).collect(Collectors.toList());
			dto.setCategoryName(String.join(",", cateNameList));
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<SongDto>builder().data(dtos).pageModel(pageModel).code(200).build();
	}

	public void delBatch(String idsStr) {
		// 批量删除友链
		if (StringUtils.isBlank(idsStr)) {
			throw new CheckParamException("选择的id","是空的");
		}
		List<String>  strList = Splitter.on(",").trimResults().omitEmptyStrings()
				.splitToList(idsStr);
		List<Integer> ids = strList.stream().map(str->Integer.parseInt(str)).collect(Collectors.toList());
		if(ids.size()==0) {throw new CheckParamException("选择id","为空");}
		songMapper.delBatch(ids);
		songBindCategoryMapper.delBatch(ids);
	}

	public JsonResult<SongDto> info(Integer id) {
		// 检查字段
		// 是否存在
		// 获取数据和分类数据
		// 返回结果
		if (id == null) {
			throw new CheckParamException("id","为空");
		}
		int count = songMapper.countById(id);
		if (count == 0) {
			throw new CheckParamException("歌曲","不存在");
		}
		Song song = songMapper.selectByPrimaryKey(id);
		List<Integer> songCateIds = songCategoryMapper.getIdListBySongId(id);
		SongDto dto = DtoUtil.adapt(new SongDto(), song);
		dto.setCategoryIds(songCateIds);
		return JsonResult.<SongDto>success(dto);
	}

	@Transactional
	public void edit(MusicParam param) {
		// 检查字段,
		// 是否存在
		// 修改数据和分类数据
		// 覆盖图片和音乐
		ValidatorUtil.check(param);
		if (param.getId() == null) {
			throw new CheckParamException("歌曲id","不能为空");
		}
		int count = songMapper.countById(param.getId());
		if (count == 0) {
			throw new CheckParamException("歌曲","不存在");
		}
		Song song = Song.builder().songName(param.getSongName())
			.singer(param.getSinger()).lyric(param.getLyric())
			.weight(param.getWeight()).duration(param.getDuration())
			.id(param.getId()).build();
		songMapper.updateByPrimaryKeySelective(song);
		songBindCategoryMapper.delBatch(Lists.newArrayList(param.getId()));
		
		List<SongBindCategory> sbinList = Lists.newArrayList();
		param.getCategoryNames().stream().forEach( categoryId -> {
			SongBindCategory sbin = SongBindCategory.builder()
					.songId(param.getId()).songCategoryId(categoryId)
					.createTime(new Date()).updateTime(new Date()).build();
			sbinList.add(sbin);
		});
		songBindCategoryMapper.insertBatch(sbinList);
	}

	public void updateCover(Integer id, MultipartFile cover) {
		// 检查字段
		// 覆盖文件
		if (cover.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!cover.getContentType().equals("image/jpeg") && !cover.getContentType().equals("image/png")) {
			throw new CheckParamException("文件类型错误","请上传jpg或png文件类型的封面");
		}
		String coverName = cover.getOriginalFilename();
		String coverPath = MD5Util.encryPassword(Integer.toString(id)) + coverName.substring(coverName.lastIndexOf("."));
		qiNiuMusicService.cover(cover,coverPath);
	}

	public void updateMusic(Integer id, MultipartFile music) {
		// 检查字段
		// 覆盖文件
		if (music.isEmpty()) {
			throw new CheckParamException("文件","为空");
		}
		if (!music.getContentType().equals("audio/mp3")) {
			throw new CheckParamException("文件类型错误","请上传mp3文件类型的音乐文件");
		}
		String musicName = music.getOriginalFilename();		
		String musicPath = MD5Util.encryPassword(Integer.toString(id)) + musicName.substring(musicName.lastIndexOf("."));
		qiNiuMusicService.music(music,musicPath);
	}

	public PageResult<SongDto> search(PageParam param) {
		// 检查字段
		// 获得搜索条件总数
		// 生成skip
		// 获得符合搜索条件的内容分页数据和分类数据
		// 返回分页数据
		ValidatorUtil.check(param);
		Long total  = songMapper.countByKeyword(param.getKeyword());
		if (total == 0) {
			return PageResult.<SongDto>builder().code(200).data(Lists.newArrayList()).pageModel(new PageModel()).build();
		}
		param.buildSkip();
		List<Song> data = songMapper.pageByKeyword(param.getSkip(),param.getPageSize(),param.getKeyword());
		List<Integer> ids = data.stream().map(song -> song.getId()).collect(Collectors.toList());
		for (int i = 0; i< ids.size();i++ ) {
			List<SongCategory> categoryList = songCategoryMapper.getListBySongId(ids.get(i));
			data.get(i).setSongCategoryList(categoryList);
		}
		List<SongDto> dtos = data.stream().map(item -> DtoUtil.adapt(new SongDto(), item)).collect(Collectors.toList());
		dtos.stream().forEach(dto -> {
			List<String> cateNameList = dto.getSongCategoryList().stream().map(item -> item.getName()).collect(Collectors.toList());
			dto.setCategoryName(String.join(",", cateNameList));
		});
		PageModel pageModel = new PageModel(total,data.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<SongDto>builder().data(dtos).pageModel(pageModel).code(200).build();
	}
}
