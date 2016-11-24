import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

import App from './App'
import ReduxTroll from './ReduxTroll'

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <div>
      <ReduxTroll />
      <App />
    </div>
  </Provider>
), document.getElementById('app'))
