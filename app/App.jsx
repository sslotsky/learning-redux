import React, { Component } from 'react'
import TodoApp from './TodoApp'
import PagerApp from './PagerApp'

import './styles.scss'

const components = {
  todos: TodoApp,
  pager: PagerApp
}

export default class App extends Component {
  state = {
    page: 'todos'
  }

  render() {
    const navigate = page => () =>
      this.setState({ page })

    const Page = components[this.state.page]

    return (
      <div>
        <ul className="nav">
          <li><a onClick={navigate('todos')}>Todos</a></li>
          <li><a onClick={navigate('pager')}>Pager</a></li>
        </ul>
        <Page />
      </div>
    )
  }
}
