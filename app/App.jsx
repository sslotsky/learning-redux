import React, { Component, PropTypes } from 'react'
import TodoApp from './TodoApp'

import '../styles.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    )
  }
}
