import * as actionTypes from '../constants/constant.js'

export function update(data) {
	// 调用方法传进来的data
	// 返回给关联的reducerTYPE方法类型和数据
    return {
        type: actionTypes.SEARCH_MODAL_DISPLAY,
        data
    }
}