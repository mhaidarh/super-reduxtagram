import Raven from 'raven-js'

const sentry_key = '8257c95388214cfc94788737099571f6'
const sentry_app = '161241'
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`

export function logException (ex, context) {
  Raven.captureException(ex, {
    extra: context
  })

  /* eslint no-console:0 */
  window && window.console && console.error && console.error(ex)
}
