import { createStore, compose } from 'redux'
import { rootReducer } from './reducers/rootReducer'

export const store = createStore(
    rootReducer,
    compose(window.devToolsExtension && window.devToolsExtension())
)