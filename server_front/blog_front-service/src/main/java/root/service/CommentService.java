package root.service;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.Lists;

import root.async.CommentedDataHandler;
import root.async.UserDataHandler;
import root.beans.JsonResult;
import root.beans.PageModel;
import root.beans.PageResult;
import root.constant.ResultCode;
import root.dto.CommentDto;
import root.exception.CheckParamException;
import root.exception.CommentException;
import root.exception.NotFoundException;
import root.mapper.ArticleMapper;
import root.mapper.CommentMapper;
import root.model.Comment;
import root.model.User;
import root.param.ChildCommentParam;
import root.param.PageParam;
import root.param.RootCommentParam;
import root.util.DtoUtil;
import root.util.IpUtil;
import root.util.ThreadUtil;
import root.util.TimeAgoUtils;
import root.util.ValidatorUtil;

@Service
public class CommentService {

	@Resource
	private ArticleMapper articaleMapper;
	@Resource
	private CommentMapper commentMapper;
	@Resource
	private CommentedDataHandler commentedDataHandler;
	@Resource
	private UserDataHandler userDataHandler;
	
	@Transactional
	public void rootAdd(RootCommentParam param) {
		// 检查字段
		// 文章是否存在
		// 获得当前用户id
		// 插入评论
		// TODO 更新文章的评论数和评论者的评论数
		// TODO 记录当前用户发起的动态消息
		// TODO 记录文章作者被接收动态消息,动态发起者和接收者是同一人则不记录
		ValidatorUtil.check(param);
		if (param.getArticleId() == null) {
			throw new CheckParamException("文章id","为空");
		}
		int count = articaleMapper.countById(param.getArticleId());
		if (count == 0) {
			throw new CommentException(ResultCode.COMMENT_ARTICLE_NOTFOUND,"评论的文章无法找到");
		}
		Integer userId = ThreadUtil.getCurrentUserId();
		Comment comment = Comment.builder().content(param.getContent())
				.userId(userId).articleId(param.getArticleId())
				.parentId(0).rootId(0).createTime(new Date()).updateTime(new Date()).build();
		commentMapper.insertSelective(comment);
		userDataHandler.recordOpear(userId,IpUtil.getIpAddress(ThreadUtil.getCurrentRequest()));
		commentedDataHandler.rootCommentSumIncr(param.getArticleId(), comment.getId(),userId);
	}
	
	@Transactional
	public void childAdd(ChildCommentParam param) {
		// 检查字段
		// 文章是否存在
		// 父评论是否存在,父评论者和评论者是不是同一人
		// 根评论是否存在
		// 插入评论
		// 记录评论文章的评论数和评论人的评论数
		// 记录评论人的发起的动态
		// 文章作者和被评论者接收这条动态，动态发起者和接收者是同一人则不记录
		// 记录用户操作
		ValidatorUtil.check(param);
		if (param.getArticleId() == null) {throw new CheckParamException("文章id","为空");}
		if (param.getParentId() == null) {throw new CheckParamException("父评论id","为空");}
		if (param.getRootId() == null) {throw new CheckParamException("根评论id","为空");}
		int count = 0; 
		count = articaleMapper.countById(param.getArticleId());
		if(count == 0) {throw new CommentException(ResultCode.COMMENT_ARTICLE_NOTFOUND,"评论的文章无法找到");}
		count = commentMapper.countById(param.getParentId());
		if(count == 0) {throw new CommentException(ResultCode.COMMENT_PARENT_NOTFOUND,"父评论无法找到");}
		count = commentMapper.countById(param.getRootId());
		if (count == 0) {throw new CommentException(ResultCode.COMMENT_ROOT_NOTFOUND,"根评论无法找到");}
		Integer userId = ThreadUtil.getCurrentUserId();
		Integer parentUserId = commentMapper.getUserIdById(param.getParentId());
		if (parentUserId == userId) {throw new CommentException(ResultCode.COMMENT_REPLY_MYSELF,"你不能回复你自己的评论");}
		Comment comment = Comment.builder().content(param.getContent())
					.userId(userId).articleId(param.getArticleId())
					.parentId(param.getParentId()).rootId(param.getRootId())
					.createTime(new Date()).updateTime(new Date()).build();
		commentMapper.insertSelective(comment);
		userDataHandler.recordOpear(userId,IpUtil.getIpAddress(ThreadUtil.getCurrentRequest()));
		commentedDataHandler.childCommentSumIncr(param.getArticleId(), 
				parentUserId,comment.getId(), userId);
	}

	public PageResult<CommentDto> pageByArt(PageParam param, Integer articleId) {
		// 检查字段
		// 文章是否存在
		// 获得文章的评论总数
		// 生成skip
		// 根据分页查询评论信息和用户信息
		// 生成分页数据
		// 返回分页结果
		// 获得子评论的父评论用户信息和根评论信息
		ValidatorUtil.check(param);
		if (articleId == null) {
			throw new CheckParamException("文章id","为空");
		}
		int count = articaleMapper.countById(articleId);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"文章不存在");
		}
		Long total = commentMapper.countByArtId(articleId);
		if (total == 0) {
			return PageResult.<CommentDto>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Comment> commentList = commentMapper.pageByArtIdWithUser(param.getSkip(),param.getPageSize(),articleId);		
		List<CommentDto> commentDtoList = Lists.newArrayList();
		commentList.forEach(comment -> {
			CommentDto dto = DtoUtil.adapt(new CommentDto(), comment);
			dto.setTimeAgo(TimeAgoUtils.format(comment.getCreateTime()));
			dto.formatNoSecondTime();
			if (dto.getRootId() == 0) {
				Long hasChild = commentMapper.countChildByRootId(dto.getId());
				if (hasChild > 0) {
					dto.setHasChild(1);
				}
			}
			if (dto.getParentId() != 0) {
				int parent = commentMapper.countById(dto.getParentId());
				if (parent != 0) {
					User parentCommentUser = commentMapper.getUserById(dto.getParentId());	
					dto.setParentUser(parentCommentUser);
				}
			}
			if (dto.getRootId() != 0) {
				int root = commentMapper.countById(dto.getRootId());
				if (root != 0) {
					Comment rootComment = commentMapper.getByIdWithUser(dto.getRootId());
					CommentDto rootDto = DtoUtil.adapt(new CommentDto(), rootComment);
					rootDto.setHasChild(1);
					dto.setRootComment(rootDto);
				}
			}
			commentDtoList.add(dto);
		});
		PageModel pageModel = new PageModel(total,commentDtoList.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<CommentDto>builder().pageModel(pageModel).data(commentDtoList).code(200).build();
	}

	public PageResult<CommentDto> pageByRootId(PageParam param, Integer rootId) {
		// 检查字段
		// 根评论是否存在
		// 获得子评论的总数
		// 生成skip
		// 获得根评论数据和评论的用户信息
		// 生成分页数据
		// 返回结果
		// 获得子评论的父评论信息
		ValidatorUtil.check(param);
		if (rootId == null) {
			throw new CheckParamException("根评论Id","为空");
		}
		int count = commentMapper.countById(rootId);
		if (count == 0) {
			throw new CommentException(ResultCode.ITEM_NOT_FOUND,"根评论不存在");
		}
		Long total = commentMapper.countChildByRootId(rootId);
		if(total == 0) {
			return PageResult.<CommentDto>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Comment> commentList = commentMapper.getChildByRootIdWithUser(param.getSkip(),param.getPageSize(),rootId);
		List<CommentDto> commentDtoList = Lists.newArrayList();
		commentList.forEach(comment -> {
			CommentDto dto = DtoUtil.adapt(new CommentDto(), comment);
			dto.setTimeAgo(TimeAgoUtils.format(comment.getCreateTime()));
			dto.formatNoSecondTime();
			if (dto.getParentId() != 0) {
				int parent = commentMapper.countById(dto.getParentId());
				if (parent != 0) {
					User parentCommentUser = commentMapper.getUserById(dto.getParentId());	
					dto.setParentUser(parentCommentUser);
				}
			}
			commentDtoList.add(dto);
		});
		PageModel pageModel = new PageModel(total,commentDtoList.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<CommentDto>builder().pageModel(pageModel).data(commentDtoList).code(200).build();
	}

	public JsonResult<List<CommentDto>> newComment(Integer pageSize) {
		// 检查字段
		// 获取评论信息和评论的用户信息和文章信息
		if (pageSize == 0 || pageSize == null) {
			throw new CheckParamException("分页大小","为空");
		}
		List<Comment> data = commentMapper.getWithArtAndUserByPageSize(pageSize);
		List<CommentDto> commentDtos = Lists.newArrayList();
		data.forEach(comment -> {
			CommentDto commentDto = DtoUtil.adapt(new CommentDto(), comment);
			commentDto.formatNoSecondTime();
			commentDto.setTimeAgo(TimeAgoUtils.format(commentDto.getUpdateTime()));
			commentDtos.add(commentDto);
		});
		return JsonResult.success(commentDtos);
	}

	public PageResult<CommentDto> pageRootComment(PageParam param, Integer articleId) {
		// 检查字段
		// 获得评论总数
		// 生成skip
		// 获得根评论的用户信息和文章信息
		// 查看根评论下是否有子评论
		// 返回分页数据
		ValidatorUtil.check(param);
		if (articleId == null) {
			throw new CheckParamException("文章id","为空");
		}
		int count = articaleMapper.countById(articleId);
		if (count == 0) {
			throw new NotFoundException(ResultCode.ITEM_NOT_FOUND,"文章不存在");
		}
		Long total = commentMapper.countByArtId(articleId);
		if (total == 0) {
			return PageResult.<CommentDto>builder().pageModel(new PageModel()).data(Lists.newArrayList()).code(200).build();
		}
		param.buildSkip();
		List<Comment> data = commentMapper.pageRootByArtIdWithUser(param.getSkip(),param.getPageSize(),articleId);
		List<CommentDto> commentDtoList = Lists.newArrayList();
		data.forEach(comment -> {
			CommentDto dto = DtoUtil.adapt(new CommentDto(), comment);
			dto.setTimeAgo(TimeAgoUtils.format(comment.getCreateTime()));
			dto.formatNoSecondTime();
			Long hasChild = commentMapper.countChildByRootId(dto.getId());
			if (hasChild > 0) {
				dto.setHasChild(1);
			}
			commentDtoList.add(dto);
		});
		PageModel pageModel = new PageModel(total,commentDtoList.size(),param.getCurrentPage(),param.getPageSize());
		return PageResult.<CommentDto>builder().pageModel(pageModel).data(commentDtoList).code(200).build();
	}

}
