package root.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.beans.JsonResult;
import root.constant.RedisCode;
import root.dto.EveryDayDto;
import root.dto.StatisicDto;
import root.mapper.AccessMapper;
import root.mapper.ArticaleMapper;
import root.mapper.CommentMapper;
import root.mapper.UserMapper;
import root.redis.RedisOperator;
import root.util.TimeUtil;

@Service
public class StatisicService {
	
	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private CommentMapper commentMapper;
	@Resource
	private UserMapper userMapper;
	@Resource
	private AccessMapper accessMapper;
	
	public JsonResult<StatisicDto> all() {
		// 获得所有的统计数据
		// 访问量,文章数,评论数，用户数
		// 本月的访问量数据
		Long accessSum = accessMapper.countAll();
		Long totalArticleSum = articaleMapper.countAll();
		Long totalCommentSum = commentMapper.countAll();
		Long totalUserSum = userMapper.countAll();
		String beforeTime = TimeUtil.format(TimeUtil.getSkipTime(Calendar.MONTH, -1));
		String nowTime = TimeUtil.format(new Date().getTime());
		List<EveryDayDto> accessList = accessMapper.everyDayByBettwen(beforeTime,nowTime);
		StatisicDto statisicDto = StatisicDto.builder().accessSum(accessSum).totalArticleSum(totalArticleSum)
							.totalCommentSum(totalCommentSum).totalUserSum(totalUserSum)
							.accessList(accessList).build();
		return JsonResult.<StatisicDto>success(statisicDto);
	}
	
	public static void main(String[] args) {
		System.out.println(TimeUtil.format(TimeUtil.getSkipTime(Calendar.MONTH, -1)));
		System.out.println(TimeUtil.format(new Date().getTime()));
	}

}
