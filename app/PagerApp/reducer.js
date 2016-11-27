import * as actionTypes from './actionTypes'
import { resolveEach } from 'redux-resolver'
import { Map } from 'immutable'

const initialState = Map({ page: 1 })

function next(state) {
  return state.set('page', state.get('page') + 1)
}

function prev(state) {
  return state.set('page', Math.max(1, state.get('page') - 1))
}

export default resolveEach(initialState, {
  [actionTypes.NEXT]: next,
  [actionTypes.PREV]: prev
})
