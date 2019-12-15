import axios from "axios"
import { AUTH_TOKEN_KEY } from "types/auth"
import storage from "helpers/storage"
import { store } from "index"
import { signOut } from "actions/auth"

const client = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
  headers: { "Content-Type": "application/json" }
})

client.interceptors.request.use(
  config => {
    const tempConfig = { ...config }
    const token = storage.getItem(AUTH_TOKEN_KEY)

    if (token) {
      tempConfig.headers.Authorization = token
    }

    return tempConfig
  },
  error => {
    return Promise.reject(error)
  }
)

client.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      store.dispatch(signOut())
      storage.removeItem(AUTH_TOKEN_KEY)
    }

    return Promise.reject(error)
  }
)

client.setAuthHeader = token => {
  client.defaults.headers.common = { Authorization: token }
}

export default client
