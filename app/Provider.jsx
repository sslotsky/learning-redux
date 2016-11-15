import React, { Component, PropTypes } from 'react'
import createStore from './store'

export default class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.element
  }

  componentDidMount() {
    this.props.store.subscribe(() =>
      this.setState(this.props.store.getState())
    )
  }

  render() {
    return React.cloneElement(this.props.children, this.state)
  }
}

const store = createStore()

export function connect(select = () => {}) {
  return Component => props =>
    <Provider store={store}>
      <Component {...select(store.getState(), props)} dispatch={store.dispatch} />
    </Provider>
}
