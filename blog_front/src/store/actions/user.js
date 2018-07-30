import * as actionTypes from '../constants/constant.js'

export function save(data) {
    return {
        type: actionTypes.SAVE_USER_INFO,
        data
    }
}