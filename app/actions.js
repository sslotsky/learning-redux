import * as actionTypes from './actionTypes'

export function updateTodo(todo) {
  return { type: actionTypes.UPDATE_TODO, todo }
}

export function createTodo(todo) {
  return { type: actionTypes.CREATE_TODO, todo }
}
