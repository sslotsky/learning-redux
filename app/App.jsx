import React, { Component } from 'react'
import Message from './Message'

export default class App extends Component {
  state = {
    message: 'What a wonderful day!'
  }

  render() {
    const onChange = e => {
      this.setState({ message: e.target.value })
    }

    return (
      <Message message={this.state.message} onChange={onChange} />
    )
  }
}
