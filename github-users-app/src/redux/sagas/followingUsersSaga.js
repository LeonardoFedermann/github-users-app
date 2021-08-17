import { call, put, takeEvery } from 'redux-saga/effects'
import { BASE_URL } from '../../base url/BaseURL'
import axios from 'axios'

const getFollowingUsersFromAPI = async (username) => {
    try {
        const followingUsers = await axios.get(`${BASE_URL}/users/${username}/following`)
        return followingUsers.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

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