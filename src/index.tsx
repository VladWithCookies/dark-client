import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ActionCableProvider } from 'react-actioncable-provider'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

import './index.css'
import App from './App'
import Modals from './components/Modals'
import store, { history } from './store'
import { API_WS_HOST } from './constants'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ActionCableProvider url={API_WS_HOST}>
    <Provider store={store}>
      <React.Fragment>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
        <Modals />
      </React.Fragment>
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
