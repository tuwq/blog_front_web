package root.constant;

public interface ResultCode {
	// 请求期间的错误
	static int REQUEST_ERROR = 1000;
	// 请求参数不正确
	static int PARAM_ERROR = 270;
	// TOKEN过期了但不需要回登陆页,依旧是成功的,不过没有数据返回
	static int TOKEN_MATURITY = 280;
	// TOKEN过期了需要重新回登陆页
	static int TOKEN_MATURITY_TOLOGIN = 11000;
	// TOKEN是伪造的,token存在,但无法解析
	static int TOKEN_NOTUSER = 11002;
	// TOKEN是伪造的,token存在，且可以解析,但与redis中用户对应的token不符
	static int TOKEN_REDIS_NOT_MATCH = 11003;
}
