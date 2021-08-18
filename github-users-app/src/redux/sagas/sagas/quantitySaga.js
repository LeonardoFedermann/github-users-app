import { call, put, takeEvery } from 'redux-saga/effects'
import { getUser } from '../requests/getUser'

function* getQuantity(action) {
    const { type, payload } = action
    try {
        const user = yield call(() => getUser(payload.username))
        let quantity = 0
        switch (type) {
            case 'GET_QUANTITY_FOLLOWERS':
                quantity = user.followers
                break
            case 'GET_QUANTITY_FOLLOWING':
                quantity = user.following
                break
            case 'GET_QUANTITY_REPOS':
                quantity = user.public_repos
                break
            default: break
        }
        yield put({
            type: 'SET_QUANTITY',
            payload: {
                quantity
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

function* quantitySaga() {
    yield takeEvery('GET_QUANTITY_FOLLOWERS', getQuantity)
    yield takeEvery('GET_QUANTITY_FOLLOWING', getQuantity)
    yield takeEvery('GET_QUANTITY_REPOS', getQuantity)
}

export default quantitySaga