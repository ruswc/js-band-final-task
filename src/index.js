import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import createStore from "store"
import * as serviceWorker from "serviceWorker"
import "bootstrap/dist/css/bootstrap.css"
import "./styles/index.scss"

import App from "App"

export const { store, persistor } = createStore()

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
