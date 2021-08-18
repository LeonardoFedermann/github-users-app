import { call, put, takeEvery } from 'redux-saga/effects'
import { getUser } from './requests/getUser'

function* changeLogedUser(action) {
    if (!action.payload.username) {
        yield put({
            type: 'LOG_OUT',
        })
    } else {
        try {
            const user = yield call(() => getUser(action.payload.username))
            yield put({
                type: 'SAVE_USER',
                payload: {
                    user
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

function* logedUserSaga() {
    yield takeEvery('CHANGE_LOGED_USER', changeLogedUser)
}

export default logedUserSaga