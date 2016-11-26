import * as actionTypes from './actionTypes'
import { resolveEach } from './reduxResolver'

const initialState = {
  newTodo: '',
  todos: [{ title: 'Finish this project' }]
}

function updateTodo(state, action) {
  return {
    ...state,
    newTodo: action.todo
  }
}

function createTodo(state, action) {
  return {
    newTodo: '',
    todos: state.todos.concat({ title: action.todo })
  }
}

export default resolveEach(initialState, {
  [actionTypes.UPDATE_TODO]: updateTodo,
  [actionTypes.CREATE_TODO]: createTodo
})
