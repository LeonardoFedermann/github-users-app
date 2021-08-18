import { put, call, takeEvery } from 'redux-saga/effects'
import { getUser } from '../requests/getUser'

function* getRenderedProfile(action) {
    const { payload } = action
    try {
        const user = yield call(() => getUser(payload.username))
        yield put({
            type: 'SET_RENDERED_PROFILE',
            payload: {
                user
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

function* renderedProfileSaga() {
    yield takeEvery('GET_RENDERED_PROFILE', getRenderedProfile)
}

export default renderedProfileSaga