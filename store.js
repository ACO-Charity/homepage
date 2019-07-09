import './lib/fontawesome'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducers from './reducers'

export function initializeStore (initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(promise(), thunkMiddleware))
  )
}