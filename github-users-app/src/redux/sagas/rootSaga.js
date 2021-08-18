import { all } from 'redux-saga/effects'
import logedUserSaga from './logedUserSaga'
import followersSaga from './followersSaga'
import followingUsersSaga from './followingUsersSaga'
import reposSaga from './reposSaga'
import quantitySaga from './quantitySaga'
import renderedUserSaga from './renderedUserSaga'

export default function* rootSaga() {
    yield all([
        logedUserSaga(),
        followersSaga(),
        followingUsersSaga(),
        reposSaga(),
        quantitySaga(),
        renderedUserSaga()
    ])
}