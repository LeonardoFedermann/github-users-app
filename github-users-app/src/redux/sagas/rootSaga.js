import {all} from 'redux-saga/effects'
import logedUserSaga from './logedUserSaga'

export default function* rootSaga(){
    yield all([
        logedUserSaga()
    ])
}