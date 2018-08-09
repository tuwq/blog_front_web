import { combineReducers } from 'redux'
import user from './user'
import showInfo from './showInfo'
import imgConfig from './imgConfig'

export default combineReducers({
    user,showInfo,imgConfig
})