import React, { PropTypes } from 'react'

export default function TodoList({ todos }) {
  const todoItems = todos.map((todo, i) => (
    <li key={i}>{todo.title}</li>
  ))

  return (
    <ul>
      {todoItems}
    </ul>
  )
}

const todo = PropTypes.shape({
  title: PropTypes.string
})

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todo)
}
