/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
)

PrivateRoute.defaultProps = {
  isAuthenticated: false
  // component: null
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool
  // component: PropTypes.node
}

export default PrivateRoute
