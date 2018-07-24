import * as types from './mutation-types'
import { _set,_remove } from 'base/js/cookie'

const mutations = {
	[types.SET_NOW_USER_INFO](state,now_user_info) {
		state.now_user_info = now_user_info
	},
	[types.SET_LOGIN_TOKEN](state,login_token) {
		state.login_token = _set('LOGIN_TOKEN',login_token,{ expires: 7 })
	},
	[types.REMOVE_LOGIN_TOKEN](state) {
		state.login_token = _remove('LOGIN_TOKEN')
	}
}
export default mutations