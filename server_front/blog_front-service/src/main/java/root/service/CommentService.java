package root.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.Lists;

import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.CommentDto;
import root.exception.CheckParamException;
import root.exception.CommentException;
import root.exception.NotFoundException;
import root.mapper.ArticaleMapper;
import root.mapper.CommentMapper;
import root.model.Articale;
import root.model.Comment;
import root.param.CommentParam;
import root.param.PageParam;
import root.praise.CommentedDataHandler;
import root.util.DtoUtil;
import root.util.ThreadUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class CommentService {

	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private CommentMapper commentMapper;
	@Resource
	private CommentedDataHandler commentedDataHandler;
	
	@Transactional
	public void rootAdd(CommentParam param) {
		// 检查字段
		// 文章是否存在
		// 获得当前用户id
		// 插入评论
		// TODO 更新文章的评论数和评论者的评论数
		// TODO 记录当前用户发起的动态消息
		// TODO 记录文章作者被接收动态消息,获取发起者和接收者是同一人则不记录
		ValidatorUtil.check(param);
		int count = articaleMapper.countById(param.getArticleId());
		if (count == 0) {
			throw new CommentException(ResultCode.COMMENT_ARTICLE_NOTFOUND,"评论的文章无法找到");
		}
		Integer userId = ThreadUtil.getCurrentUserId();
		Comment comment = Comment.builder().content(param.getContent())
				.userId(userId).articaleId(param.getArticleId())
				.parentId(0).rootId(0).createTime(new Date()).updateTime(new Date()).build();
		commentMapper.insertSelective(comment);
		commentedDataHandler.CommentSumIncr(param.getArticleId(), comment.getId(),userId);
	}

	public PageResult<CommentDto> pageByArt(PageParam param, Integer articleId) {
		// 检查字段
		// 文章是否存在
		// 获得文章的评论总数
		// 生成skip
		// 根据分页查询评论信息和用户信息
		// 生成分页数据
		// 返回结果
		ValidatorUtil.check(param);
		if (articleId == null) {
			throw new CheckParamException("文章id","为空");
		}
		int count = articaleMapper.countById(articleId);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"文章不存在");
		}
		Long total = commentMapper.countByArtId(articleId);
		param.buildSkip();
		List<Comment> commentList = commentMapper.pageByArtIdWithUser(param.getSkip(),param.getPageSize(),articleId);
		List<CommentDto> commentDtoList = Lists.newArrayList();
		commentList.forEach(comment -> {
			CommentDto dto = DtoUtil.adapt(new CommentDto(), comment);
			dto.setTimeAgo(TimeAgoUtils.format(comment.getCreateTime()));
			dto.formatNoSecondTime();
			commentDtoList.add(dto);
		});
		PageModel pageModel = new PageModel(total,commentDtoList.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<CommentDto>builder().pageModel(pageModel).data(commentDtoList).build();
	}

}
