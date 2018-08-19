import * as actionTypes from '../constants/constant.js'

export function savePlayData(data) {
    return {
        type: actionTypes.SAVE_PLAY_DATA,
        data
    }
}
