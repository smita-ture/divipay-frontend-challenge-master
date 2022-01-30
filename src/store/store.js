import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import transactions, { transactionsInitialState } from './transactions/reducer'
import { useMemo } from 'react'

let store

const initialState = {
  transactions: transactionsInitialState
}

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    transactions
})

const reducer = (state, action) => {
  return combinedReducer(state, action)
}

const initStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState, bindMiddleware([thunkMiddleware]))
}

export const initializeStore = preloadedState => {
  let _store = store ? store : initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
