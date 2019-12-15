/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const GuestRoute = ({ isGuest, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isGuest ? <Component {...props} /> : <Redirect to="/" />)}
  />
)

GuestRoute.defaultProps = {
  isGuest: false
}

GuestRoute.propTypes = {
  isGuest: PropTypes.bool
}

export default GuestRoute
