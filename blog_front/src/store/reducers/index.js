import { combineReducers } from 'redux'
import user from './user'
import showInfo from './showInfo'
import imgConfig from './imgConfig'
import player from './player'
import songs from './songs'

export default combineReducers({
    user,showInfo,imgConfig,player,songs
})