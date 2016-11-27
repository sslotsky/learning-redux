import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import pager from './PagerApp/reducer'
import todos from './TodoApp/reducer'

export default combineReducers({
  pager,
  todos,
  routing
})
