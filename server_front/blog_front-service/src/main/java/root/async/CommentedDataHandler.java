package root.async;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import root.mapper.ArticleMapper;
import root.mapper.UserInitiateDynamicMapper;
import root.mapper.UserMapper;
import root.mapper.UserReceiveDynamicMapper;
import root.model.UserInitiateDynamic;
import root.model.UserReceiveDynamic;

@Service
public class CommentedDataHandler {

	@Resource
	private ArticleMapper articaleMapper;
	@Resource
	private UserMapper userMapper;
	@Resource
	private UserInitiateDynamicMapper initiateDynamicMapper;
	@Resource
	private UserReceiveDynamicMapper receiveDynamicMapper;
	
	@Async
	public void rootCommentSumIncr(Integer articleId,Integer commentId,Integer initiateUserId) {
		// 文章评论数增加
		// 评论者的评论数量增加
		// 记录当前用户发起的动态消息
		// 文章作者接收的这条动态消息,动态发起者和接收者是同一人则不记录
		articaleMapper.commentSumIncr(articleId);
		userMapper.commentSumIncr(initiateUserId);
		UserInitiateDynamic initiateDynamic = UserInitiateDynamic.builder()
					.type(1).action(1)
					.typeId(commentId).initiateUserId(initiateUserId).createTime(new Date()).build();
		initiateDynamicMapper.insertSelective(initiateDynamic);
		Integer authId = articaleMapper.getAuthIdById(articleId);
		if (authId == initiateUserId) {
			return;
		}
		UserReceiveDynamic receiveDynamic = UserReceiveDynamic.builder()
					.initiateDynamicId(initiateDynamic.getId())
					.receiveUserId(authId).createTime(new Date()).build();
		receiveDynamicMapper.insertSelective(receiveDynamic);
	}

	@Async
	public void childCommentSumIncr(Integer articleId, Integer parentUserId, Integer commentId, Integer initiateUserId) {
		// 文章评论数增加
		// 评论者的评论数增加
		// 记录当前用户发起的动态消息
		// 文章作者和被评论者接收这条动态消息,动态发起者和接收者是同一人则不接收
		articaleMapper.commentSumIncr(articleId);
		userMapper.commentSumIncr(initiateUserId);
		UserInitiateDynamic initiateDynamic = UserInitiateDynamic.builder().type(1).action(2)
					.typeId(commentId).initiateUserId(initiateUserId).createTime(new Date()).build();
		initiateDynamicMapper.insertSelective(initiateDynamic);
		UserReceiveDynamic receive1 = UserReceiveDynamic.builder()
				.initiateDynamicId(initiateDynamic.getId())
				.receiveUserId(parentUserId).createTime(new Date()).build();
		receiveDynamicMapper.insertSelective(receive1);
		Integer authId = articaleMapper.getAuthIdById(articleId);
		if (authId == initiateUserId) {
			return;
		}
		UserReceiveDynamic receive2 = UserReceiveDynamic.builder()
				.initiateDynamicId(initiateDynamic.getId())
				.receiveUserId(authId).createTime(new Date()).build();
		receiveDynamicMapper.insertSelective(receive2);
	}
}
