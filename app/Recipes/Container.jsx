import React, { Component, PropTypes } from 'react'
import List from './List'
import { connect } from 'react-redux'
import * as actions from './actions'

export class Container extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    return (
      <List />
    )
  }
}

export default connect(
  undefined,
  actions
)(Container)
