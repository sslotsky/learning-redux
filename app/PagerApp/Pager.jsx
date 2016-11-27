import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export function Pager({ page, prev, next }) {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={prev} type="button">&lt;</button>
      <span className="page">{page}</span>
      <button onClick={next} type="button">&gt;</button>
    </div>
  )
}

Pager.propTypes = {
  page: PropTypes.number.isRequired
}

export default connect(
  state => state.toJS(),
  actions
)(Pager)

