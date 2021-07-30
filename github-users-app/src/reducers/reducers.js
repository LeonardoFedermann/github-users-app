import { combineReducers } from 'redux'
import { followers } from './followers'
import { followingUsers } from './followingUsers'
import { logedUser } from './logedUser'
import { repos } from './repos'

export const reducers = combineReducers({
    followers,
    followingUsers,
    logedUser,
    repos
})