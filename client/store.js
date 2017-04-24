import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import rootReducer from './reducers/index'
import comments from './data/comments'
import posts from './data/posts'

/*
  Store

  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const middleware = applyMiddleware(promise(), thunk, createLogger())

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState, middleware, composeWithDevTools(
  applyMiddleware(...middleware)
))

// we export history because we need it in `reduxstagram.js` to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store)

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
