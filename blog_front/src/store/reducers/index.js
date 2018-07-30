import { combineReducers } from 'redux'
import search from './search.js'
import user from './user.js'
import comment from './comment.js'

export default combineReducers({
    search,user,comment
})