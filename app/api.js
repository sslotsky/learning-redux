import axios from 'axios'

const API_BASE = 'https://brewed-dev.herokuapp.com/v1'
const API_KEY = 'b780aac581de488cf77a629517ac999b'

function api() {
  return axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: {
      'X-Api-Key': API_KEY,
      Accept: 'application/json'
    }
  })
}

export default {
  recipes: {
    list: () =>
      api().get('/recipes', { params: { page: 1, results_per_page: 15 } })
  }
}

