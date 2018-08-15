import cookies from 'js-cookie'

const TOKEN_KEY = 'securityToken'

export function _setToken(token) {
	cookies.set(TOKEN_KEY,token,{ expires: global.TOKEN_TIME_DAY })
	return token
}

export function _getToken() {
	return cookies.get(TOKEN_KEY,'')
}

export function _removeToken(config) {
	return cookies.remove(TOKEN_KEY)
}