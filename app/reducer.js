import * as actionTypes from './actionTypes'

const initialState = {
  newTodo: '',
  todos: [{ title: 'Finish this project' }]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        newTodo: action.todo
      }
    case actionTypes.CREATE_TODO:
      return {
        newTodo: '',
        todos: state.todos.concat({ title: action.todo })
      }
    default:
      return state
  }
}
