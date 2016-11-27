import * as actionTypes from './actionTypes'
import { resolveEach } from 'redux-resolver'
import Immutable, { Map } from 'immutable'

const initialState = Immutable.fromJS({
  page: 1,
  newTodo: '',
  todos: [{ title: 'Finish this project' }]
})

function next(state) {
  return state.set('page', state.get('page') + 1)
}

function prev(state) {
  return state.set('page', Math.max(1, state.get('page') - 1))
}

function updateTodo(state, action) {
  return state.set('newTodo', action.todo)
}

function createTodo(state, action) {
  return state.merge({
    newTodo: '',
    todos: state.get('todos').push(Map({ title: action.todo }))
  })
}

export default resolveEach(initialState, {
  [actionTypes.UPDATE_TODO]: updateTodo,
  [actionTypes.CREATE_TODO]: createTodo,
  [actionTypes.NEXT]: next,
  [actionTypes.PREV]: prev
})
