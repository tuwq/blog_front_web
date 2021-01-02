export const REQUEST_SUCCESS = 200
// 请求参数不正确
export const PARAM_ERROR = 270
// 查找的目标资源不存在,比如文章
export const ITEM_NOT_FOUND = 271
// 查找的关键字数量没有结果
export const SEARCH_KEYWORD_NOT_RESULT = 272
// 邮箱激活过期了
export const EMAIL_MATURITY = 300
// 评论自己的评论
export const COMMENT_REPLY_MYSELF = 305
// TOKEN过期了但不需要回登陆页,依旧是成功的,不过没有数据返回
export const TOKEN_MATURITY = 280
// 请求期间的普通错误
export const REQUEST_ERROR = 1000
// TOKEN过期了需要重新回登陆页
export const TOKEN_TOLOGIN = 11000
// TOKEN是伪造的,token存在,但无法解析
export const TOKEN_NOTUSER = 11001
// TOKEN是伪造的,token存在，且可以解析,但与redis中用户对应的token不符
export const TOKEN_REDIS_NOT_MATCH = 11002