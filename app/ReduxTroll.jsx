import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

export class ReduxTroll extends Component {
  static propTypes = {
    newTodo: PropTypes.string,
    updateTodo: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      nextProps.updateTodo('')
    }
  }

  render() {
    return false
  }
}

export default connect(
  state => state,
  actions
)(ReduxTroll)
