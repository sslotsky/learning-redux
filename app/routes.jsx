import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import TodoApp from './TodoApp/TodoApp'
import PagerApp from './PagerApp/PagerApp'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoApp} />
    <Route path="pager" component={PagerApp} />
  </Route>
)
