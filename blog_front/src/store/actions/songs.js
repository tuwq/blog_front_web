import * as actionTypes from '../constants/constant.js'

export function saveSongs(data) {
    return {
        type: actionTypes.SAVE_SONG_LIST,
        data
    }
}

export function getCurrentSong(data) {
    return {
        type: actionTypes.GET_CURRENT_SONG,
        data
    }
}