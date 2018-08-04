package root.praise;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import root.mapper.ArticaleMapper;
import root.mapper.UserInitiateDynamicMapper;
import root.mapper.UserMapper;
import root.mapper.UserReceiveDynamicMapper;
import root.model.UserInitiateDynamic;
import root.model.UserReceiveDynamic;

@Service
public class CommentedDataHandler {

	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private UserMapper userMapper;
	@Resource
	private UserInitiateDynamicMapper initiateDynamicMapper;
	@Resource
	private UserReceiveDynamicMapper userReceiveDynamicMapper;
	
	@Async
	public void CommentSumIncr(Integer articleId,Integer commentId,Integer initiateUserId) {
		// 文章评论数增加
		// 评论者的评论数量增加
		// 记录当前用户发起的动态消息
		// 记录文章作者被接收的动态消息,获取发起者和接收者是同一人则不记录
		articaleMapper.commentSumIncr(articleId);
		userMapper.commentSumIncr(initiateUserId);
		UserInitiateDynamic initiateDynamic = UserInitiateDynamic.builder()
					.type(1).action(1)
					.typeId(commentId).initiateUserId(initiateUserId).createTime(new Date()).build();
		initiateDynamicMapper.insertSelective(initiateDynamic);
		Integer receiveUserId = articaleMapper.getAuthIdById(articleId);
		if (receiveUserId == initiateUserId) {
			return;
		}
		UserReceiveDynamic receiveDynamic = UserReceiveDynamic.builder()
					.initiateDynamicId(initiateDynamic.getId())
					.receiveUserId(receiveUserId).createTime(new Date()).build();
		userReceiveDynamicMapper.insertSelective(receiveDynamic);
	}
}
