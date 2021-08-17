import { call, put, takeEvery } from 'redux-saga/effects'
import { BASE_URL } from '../../base url/BaseURL'
import axios from 'axios'

const getFollowersFromAPI = async (username) => {
    try {
        const followers = await axios.get(`${BASE_URL}/users/${username}/followers`)
        return followers.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

function* getFollowers(action) {
    try {
        const followers = yield call(() => getFollowersFromAPI(action.payload.username))
        yield put({
            type: 'SET_FOLLOWERS',
            payload: {
                followers
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

function* followersSaga() {
    yield takeEvery('GET_FOLLOWERS', getFollowers)
}

export default followersSaga