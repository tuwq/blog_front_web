import * as actionTypes from '../constants/constant.js'

export function load(data) {
    return {
        type: actionTypes.COMMENT_MODAL_DISPLAY_AND_LOAD,
        data
    }
}