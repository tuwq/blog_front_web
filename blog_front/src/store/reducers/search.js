import * as actionTypes from '../constants/constant.js'

var initialState = {
	searchModal: false
}

export default function search (state = initialState, action) {
    switch (action.type) {
    	// 接收来自关联action的参数,在这里可以进行逻辑处理,并返回给action一个结果
        case actionTypes.SEARCH_MODAL_DISPLAY:
        	return Object.assign({},state,{
        		searchModal: action.data
        	})
        default:
        	// 默认调用该reducer的state值
            return state
    }
}