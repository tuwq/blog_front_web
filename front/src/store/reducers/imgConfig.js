import * as actionTypes from '../constants/constant.js'

var initialState = {
	categoryImg: '',
	searchImg: '',
	artImg: '',
	userImg: '',
    loginImg: '',
    logoImg: '',
	sliderImgList: []
}

export default function imgConfig (state = initialState, action) {
    switch (action.type) {
    	// 接收来自关联action的参数,在这里可以进行逻辑处理,并返回给action一个结果
        case actionTypes.SAVE_IMG_CONFIG:
            return Object.assign({},action.data)
        default:
        	// 默认调用该reducer的state值
            return state
    }
}