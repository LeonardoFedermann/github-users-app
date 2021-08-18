import { put, call, takeEvery } from 'redux-saga/effects'
import { getUser } from './requests/getUser'

function* getRenderedUser(action) {
    const { payload } = action
    try {
        const user = yield call(() => getUser(payload.username))
        yield put({
            type: 'SET_RENDERED_USER',
            payload: {
                user
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

function* renderedUserSaga() {
    yield takeEvery('GET_RENDERED_USER', getRenderedUser)
}

export default renderedUserSaga