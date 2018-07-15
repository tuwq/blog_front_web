import * as actionTypes from '../constants/constant.js'

export function save(data) {
	// 调用方法传进来的data
	// 返回给关联的reducerTYPE方法类型和数据
	// 这是一个修改modal的display状态的action
    return {
        type: actionTypes.SAVE_PEOPLE,
        data
    }
}