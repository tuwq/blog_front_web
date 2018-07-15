import * as actionTypes from '../constants/constant.js'

var initialState = {}

export default function people (state = initialState, action) {
    switch (action.type) {
    	// 接收来自关联action的参数,在这里可以进行逻辑处理,并返回给action一个结果
        case actionTypes.SAVE_PEOPLE:
            return action.data
        default:
        	// 默认调用该reducer的state值
            return state
    }
}