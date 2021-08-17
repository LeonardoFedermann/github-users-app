import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)