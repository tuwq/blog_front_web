package root.async;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import root.mapper.ArticaleMapper;
import root.mapper.UserMapper;

@Service
public class IncrDataHandler {

	@Resource
	private ArticaleMapper articaleMapper;
	@Resource
	private UserMapper userMapper;
	
	@Async
	public void articlePraiseIncr(Integer articleId) {
		// 文章的点赞数自增
		// 文章作者的点赞数自增
		articaleMapper.praiseSumIncr(articleId);
		articaleMapper.authPraiseSumIncr(articleId);
	}
	
	@Async
	public void articleBrowseIncr(Integer articleId) {
		// 文章的浏览量+1
		articaleMapper.browseSumIncr(articleId);
	}

}
