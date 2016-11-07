import React, { Component } from 'react'
import TodoList from './TodoList'

export default class App extends Component {
  state = {
    newTodo: '',
    todos: [{ title: 'Finish this project' }]
  }

  render() {
    const onChange = e => {
      this.setState({ newTodo: e.target.value })
    }

    const { todos, newTodo } = this.state

    const addTodo = (e) => {
      e.preventDefault()

      this.setState({
        newTodo: '',
        todos: todos.concat({ title: newTodo })
      })
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
