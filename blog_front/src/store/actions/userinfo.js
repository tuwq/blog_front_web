import * as actionTypes from '../constants/user.js'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}