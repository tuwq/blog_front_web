package root.constant;

public interface ResultCode {	
	// 请求参数不正确
	static int PARAM_ERROR = 270;
	// 查找的目标资源不存在,比如文章
	static int ITEM_NOT_FOUND = 271;
	// 搜索查找的关键字数据不存在
	static int SEARCH_KEYWORD_NOT_RESULT = 272;
	// 邮箱激活过期了
	static int EMAIL_MATURITY = 300;
	// 文件上传失败了
	static int FILE_UPLOAD_FAIL = 301;
	// 评论的文章无法找到
	static int COMMENT_ARTICLE_NOTFOUND = 302;
	// 评论的父评论无法找到
	static int COMMENT_PARENT_NOTFOUND = 303;
	// 评论的根评论无法找到
	static int COMMENT_ROOT_NOTFOUND = 304;
	// 评论自己的评论
	static int COMMENT_REPLY_MYSELF = 305;
	// TOKEN过期了但不需要回登陆页,依旧是成功的,不过没有数据返回
	static int TOKEN_MATURITY = 280;
	// 请求期间的普通错误
	static int REQUEST_ERROR = 1000;
	// TOKEN过期了需要重新回登陆页
	static int TOKEN_TOLOGIN = 11000;
	// TOKEN是伪造的,token存在,但无法解析
	static int TOKEN_NOTUSER = 11001;
	// TOKEN是伪造的,token存在，且可以解析,但与redis中用户对应的token不符
	static int TOKEN_REDIS_NOT_MATCH = 11002;
}
