import { call, put, takeEvery } from 'redux-saga/effects'
import { getFollowingUsersFromAPI } from '../requests/getFollowingUsersFromAPI'

function* getFollowingUsers(action) {
    try {
        const followingUsers = yield call(() => getFollowingUsersFromAPI(action.payload.username))
        yield put({
            type: 'SET_FOLLOWING_USERS',
            payload: {
                followingUsers
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

function* followingUsersSaga() {
    yield takeEvery('GET_FOLLOWING_USERS', getFollowingUsers)
}

export default followingUsersSaga