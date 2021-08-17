import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { BASE_URL } from '../../base url/BaseURL'

const getReposFromAPI = async (username) => {
    try {
        const repos = await axios.get(`${BASE_URL}/users/${username}/repos`)
        return repos.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

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