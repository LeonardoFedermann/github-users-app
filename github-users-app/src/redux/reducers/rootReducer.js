import { combineReducers } from 'redux'
import { followers } from './reducers/followers'
import { followingUsers } from './reducers/followingUsers'
import { logedUser } from './reducers/logedUser'
import { repos } from './reducers/repos'
import { quantity } from './reducers/quantity'
import { renderedProfile } from './reducers/renderedProfile'

export const rootReducer = combineReducers({
    followers,
    followingUsers,
    logedUser,
    repos,
    quantity,
    renderedProfile
})