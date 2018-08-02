import * as actionTypes from '../constants/constant.js'

export function save(data) {
    return {
        type: actionTypes.SAVE_SHOW_INFO,
        data
    }
}

export function incrFollow(data) {
	return {
		type: actionTypes.INCR_FOLLOW_SUM,
		data
	}
}

export function incrFans(data) {
	return {
		type: actionTypes.INCR_FANS_SUM,
		data
	}
}