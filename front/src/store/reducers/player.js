import * as actionTypes from '../constants/constant'
import { playModel } from '../constants/songModel'

var initialState = {
	palyStatus: false,
	palyering: false,
	fullScreen: true,
	model: playModel.sequence,
}

export default function player (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_PLAY_DATA:
            return Object.assign({},state,action.data)
        default:
            return state
    }
}