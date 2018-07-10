import * as actionTypes from '../constants/user.js'

const initialState = {}

export default function user (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}