import React, { Component, PropTypes } from 'react'
import TodoList from './TodoList'
import { connect } from './Provider'
import { CREATE_TODO, UPDATE_TODO } from './store'

const Todo = PropTypes.shape({
  title: PropTypes.string
})

export class App extends Component {
  static propTypes = {
    newTodo: PropTypes.string,
    todos: PropTypes.arrayOf(Todo).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { todos, newTodo, dispatch } = this.props

    const onChange = e => {
      dispatch({ type: UPDATE_TODO, todo: e.target.value })
    }

    const addTodo = (e) => {
      e.preventDefault()

      dispatch({ type: CREATE_TODO, todo: newTodo })
    }

    return (
      <div>
        <form onSubmit={addTodo}>
          <input value={newTodo} onChange={onChange} />
          <label>
            Create todo: <span>{newTodo}</span>
          </label>
        </form>
        <TodoList todos={todos} />
      </div>
    )
  }
}

export default connect(
  state => state
)(App)
