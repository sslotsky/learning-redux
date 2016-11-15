export const UPDATE_TODO = 'UPDATE_TODO'
export const CREATE_TODO = 'CREATE_TODO'

const initialState = {
  newTodo: '',
  todos: [{ title: 'Finish this project' }]
}

function reduce(state, action) {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...state,
        newTodo: action.todo
      }

      break
    case CREATE_TODO:
      return {
        newTodo: '',
        todos: state.todos.concat({ title: action.todo })
      }

      break
    default:
      return state
      break
  }
}

let state = initialState
let store = null

export default function createStore() {
  if (store) {
    return store
  }

  let listeners = []

  store = {
    subscribe: listener => {
      listeners.push(listener)
    },
    dispatch: action => {
      state = reduce(state, action)
      listeners.forEach(l => l())
      return action
    },
    getState: () => state
  }

  return store
}
