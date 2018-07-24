import { _get } from 'base/js/cookie'

// vuex的数据刷新页面后会丢失
const state = {
	now_user_info: undefined,
	login_token: _get('LOGIN_TOKEN')||''
}

export default state;