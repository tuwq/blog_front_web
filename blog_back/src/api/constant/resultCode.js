// TOKEN过期了需要重新回登陆页
export const TOKEN_MATURITY_LOGIN = 1000
// TOKEN是伪造的,token存在,但无法解析
export const TOKEN_NOTUSER = 1001
// TOKEN过期了但不需要回登陆页,依旧是成功的,不过没有数据返回
export const TOKEN_MATURITY = 260
// 请求参数不正确
export const PARAM_ERROR_CODE = 1100
// 请求期间的错误
export const REQUEST_ERROR_CODE = 1101
