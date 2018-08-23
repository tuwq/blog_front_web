package root.constant;

public interface RedisCode {
	
	// 邮箱验证
	static String EMAIL_ACTIVATION_CODE = "EMAIL_ACTIVATION_CODE";
	// 维持用户状态token
	static String TOKEN = "___TOKEN___";
	// 找回密钥
	static String EMAIL_FIND_PASS_CODE = "EMAIL_FIND_PASS_CODE"; 
	// ip存储
	static String IP_STORAGE = "IP_STORAGE";
	// 每个ip存储
	static String IP_CODE = "IP_CODE";
	// 文章存储缓存
	static String ARTICLE_INFO_CACHE = "ARTICLE_CACHE";
	// 文章分类存储列表缓存
	static String ARTICLE_CATEGORY_CACHE = "ARTICLE_CATEGORY_CACHE";
	// 文章权重排行列表缓存
	static String ARTICLE_LIST_WEIGHT_CACHE = "ARTICLE_LIST_INDEX_CACHE";
	// 文章最新排行列表缓存
	static String ARTICLE_LIST_NEWTIME_CACHE = "ARTICLE_LIST_NEWTIME_CACHE";
	// 文章高赞排行列表缓存
	static String ARTICLE_LIST_PRAISE_CACHE = "ARTICLE_LIST_PRAISE_CACHE";
	// 文章多评论排行列表缓存
	static String ARTICLE_LIST_COMMENT_CACHE = "ARTICLE_LIST_COMMENT_CACHE";
	// 图片配置缓存
	static String CONFIG_IMG_CACHE = "CONFIG_IMG_CACHE";
}
