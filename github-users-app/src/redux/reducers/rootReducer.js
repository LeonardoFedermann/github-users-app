import { combineReducers } from 'redux'
import { followers } from './followers'
import { followingUsers } from './followingUsers'
import { logedUser } from './logedUser'
import { repos } from './repos'

export const rootReducer = combineReducers({
    followers,
    followingUsers,
    logedUser,
    repos
})