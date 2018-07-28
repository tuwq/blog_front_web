import * as types from './mutation-types'

const mutations = {
	[types.SET_NOW_USER_INFO](state,now_user_info) {
		state.now_user_info = now_user_info
	}
}
export default mutations