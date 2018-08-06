import * as actionTypes from '../constants/constant.js'

var initialState = {
	identity: 0,
	userDto: undefined,
    followStatus: 0,
    fansSum: 0,
    followsSum: 0,
    dynamicInitiateSum: 0,
    dynamicReceiveSum: 0
}

export default function showInfo (state = initialState, action) {
    switch (action.type) {
    	// 接收来自关联action的参数,在这里可以进行逻辑处理,并返回给action一个结果
        case actionTypes.SAVE_SHOW_INFO:
            return Object.assign({},state,action.data)
        case actionTypes.INCR_FOLLOW_SUM:
            state.followsSum = state.followsSum+(action.data)
            return Object.assign({},state)
        case actionTypes.INCR_FANS_SUM:
            state.fansSum = state.fansSum+(action.data)
            return Object.assign({},state)
        default:
        	// 默认调用该reducer的state值
            return state
    }
}