import { combineReducers } from 'redux'
import user from './user'
import comment from './comment'
import showInfo from './showInfo'

export default combineReducers({
    user,comment,showInfo
})