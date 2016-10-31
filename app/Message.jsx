import React, { PropTypes } from 'react'

export default function Message({ message, onChange }) {
  return (
    <div>
      <input value={message} onChange={onChange} />
      <p>{message}</p>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
