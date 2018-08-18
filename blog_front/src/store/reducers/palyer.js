import * as actionTypes from '../constants/constant.js'
import * as { playModel } from '../constants/songModel.js'

var initialState = {
	palyStatus: false,
	palyering: false,
	fullScreen: true,
	songList: [],
	sequenceList: [],
	model: playModel.sequence,
	currentIndex: -1,
	currentSong: {}
}

export default function palyer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_SONGLIST_PLAY:
            return Object.assign({},state,action.data)
        case actionTypes.GET_CURRENT_SONG:
        	return Object.assign({},state.currentSong)
        default:
            return state
    }
}