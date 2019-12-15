import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import axios from "axios"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.css"
import "./styles/index.scss"

import createStore from "./store"

const token = localStorage.getItem("token")
const { store, persistor } = createStore()

if (token) {
  axios.defaults.headers.common = { Authorization: token }
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
