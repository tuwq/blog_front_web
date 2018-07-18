import { combineReducers } from 'redux'
import search from './search.js'
import people from './people.js'
import comment from './comment.js'

export default combineReducers({
    search,people,comment
})