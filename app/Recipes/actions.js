import api from '../api'

export function fetch() {
  return () => api.recipes.list()
}
