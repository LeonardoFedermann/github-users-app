import { call, put, takeEvery } from 'redux-saga/effects'
import {getFollowersFromAPI} from './requests/getFollowersFromAPI'

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