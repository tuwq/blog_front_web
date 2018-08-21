import * as actionTypes from '../constants/constant'

var initialState = {
	songList: [],
	defaultList: [],
    searchList: [],
	currentIndex: -1,
	currentSong: {}
}

export default function songs (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_SONG_LIST:
            return Object.assign({},state,action.data)
        case actionTypes.GET_CURRENT_SONG:
        	return Object.assign({},state.currentSong)
        default:
            return state
    }
}
/*
sequenceList
*/