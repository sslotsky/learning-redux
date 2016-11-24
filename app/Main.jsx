import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

import App from './App'

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <App />
    </div>
  </Provider>
), document.getElementById('app'))
