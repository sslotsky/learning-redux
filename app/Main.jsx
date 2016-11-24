import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

import App from './App'
import DevTools from './DevTools'
import ReduxTroll from './ReduxTroll'

const store = createStore(reducer, compose(DevTools.instrument()))

ReactDOM.render((
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>
), document.getElementById('app'))
