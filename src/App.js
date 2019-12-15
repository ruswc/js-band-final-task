import React from "react"
import { Route, Switch } from "react-router-dom"

import Header from "containers/Header"
import GuestRoute from "containers/routes/GuestRoute"
import PrivateRoute from "containers/routes/PrivateRoute"

import SignIn from "pages/SignIn"
import Books from "pages/Books"
import Book from "pages/Book"
import Cart from "pages/Cart"
import NotFound from "pages/NotFound"

const App = () => (
  <>
    <Header />
    <Switch>
      <GuestRoute path="/signin" exact component={SignIn} />
      <PrivateRoute path="/books/:id" exact component={Book} />
      <PrivateRoute path="/" exact component={Books} />
      <PrivateRoute path="/cart" exact component={Cart} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  </>
)

export default App
