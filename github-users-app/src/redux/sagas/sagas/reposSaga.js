import { put, call, takeEvery } from 'redux-saga/effects'
import { getReposFromAPI } from '../requests/getReposFromAPI'

function* getRepos(action) {
    try {
        const repos = yield call(() => getReposFromAPI(action.payload.username))
        yield put({
            type: 'SET_REPOS',
            payload: {
                repos
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

function* reposSaga() {
    yield takeEvery('GET_REPOS', getRepos)
}

export default reposSaga