import React from 'react'
import { render } from 'react-dom'

import css from './styles/style.styl'

import App from './components/App'
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

/*
  Error Logging
*/

import Raven from 'raven-js'
import { sentry_url, logException } from './data/config'

if (window) {
  Raven.config(sentry_url).install()
}

// Raven.captureMessage('SOMETHING BAD HAPPENED')
// Raven.showReportDialog()

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
