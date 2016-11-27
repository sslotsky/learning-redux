import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import './styles.scss'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/pager">Pager</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
