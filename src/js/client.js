import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), thunk, createLogger())

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': {
      state = {...state, fetching: true, fetched: false}
      break
    }
    case 'FETCH_USERS_REJECTED': {
      state = {...state, fetching: false, error: action.payload}
      break
    }
    case 'FETCH_USERS_FULFILLED': {
      state = {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload.data
      }
      break
    }
  }
  return state
}

// const reducers = combineReducers(mainReducer)

const store = createStore(mainReducer, middleware)

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('http://rest.learncode.academy/api/wstern/users')
})
