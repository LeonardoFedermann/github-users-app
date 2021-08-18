import { all } from 'redux-saga/effects'
import logedUserSaga from './sagas/logedUserSaga'
import followersSaga from './sagas/followersSaga'
import followingUsersSaga from './sagas/followingUsersSaga'
import reposSaga from './sagas/reposSaga'
import quantitySaga from './sagas/quantitySaga'
import renderedProfileSaga from './sagas/renderedProfileSaga'

export default function* rootSaga() {
    yield all([
        logedUserSaga(),
        followersSaga(),
        followingUsersSaga(),
        reposSaga(),
        quantitySaga(),
        renderedProfileSaga()
    ])
}