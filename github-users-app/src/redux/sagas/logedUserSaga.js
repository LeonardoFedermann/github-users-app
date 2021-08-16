import { call, put, takeEvery } from 'redux-saga/effects'
import { BASE_URL } from '../../base url/BaseURL'
import axios from 'axios'

const saveUser = async (username) => {
    try {
        const user = await axios.get(`${BASE_URL}/users/${username}`)
        return user.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

function* changeUser(action) {
    if (!action.payload.user) {
        yield put({
            type: 'LOG_OUT',
        })
    } else {
        try {
            const user = yield call(()=>saveUser(action.payload.user))
            yield put({
                type: 'SAVE_USER',
                payload: {
                    user
                }
            })
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
}

function* logedUserSaga() {
    yield takeEvery('CHANGE_USER', changeUser)
}

export default logedUserSaga