import React from "react"
import { Route, Switch } from "react-router-dom"

import SignIn from "./pages/SignIn"
import Books from "./pages/Books"
import Book from "./pages/Book"
import Cart from "./pages/Cart"

const App = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/books/:id" exact component={Book} />
    <Route path="/books" exact component={Books} />
    <Route path="/cart" exact component={Cart} />
  </Switch>
)

export default App
