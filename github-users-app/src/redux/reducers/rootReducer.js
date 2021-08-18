import { combineReducers } from 'redux'
import { followers } from './followers'
import { followingUsers } from './followingUsers'
import { logedUser } from './logedUser'
import { repos } from './repos'
import { quantity } from './quantity'
import { renderedUser } from './renderedUser'

export const rootReducer = combineReducers({
    followers,
    followingUsers,
    logedUser,
    repos,
    quantity,
    renderedUser
})