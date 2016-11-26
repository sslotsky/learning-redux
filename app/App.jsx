import React, { Component, PropTypes } from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import * as actions from './actions'

const Todo = PropTypes.shape({
  title: PropTypes.string
})

export class App extends Component {
  static propTypes = {
    newTodo: PropTypes.string,
    todos: PropTypes.arrayOf(Todo).isRequired,
    updateTodo: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, newTodo, updateTodo, createTodo } = this.props

    const onChange = e => {
      updateTodo(e.target.value)
    }

    const addTodo = (e) => {
      e.preventDefault()

      createTodo(newTodo)
    }

    return (
      <div>
        <h1>Todo List</h1>
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
  state => state.toJS(),
  actions
)(App)
