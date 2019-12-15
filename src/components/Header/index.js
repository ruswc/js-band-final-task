import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Button from "components/Button"
import Avatar from "components/Avatar"

import logo from "./logo.svg"

const Header = ({ isAuthenticated, user, cartCount, signOut }) => {
  const handleSignOut = () => signOut()

  return (
    <header>
      {/* <nav className="navbar navbar-light bg-light mb-3 fixed-top"> */}
      <nav className="navbar navbar-dark bg-light mb-3 fixed-top">
        <Link className="navbar-brand" to="/">
          <img alt="" src={logo} className="mr-4" />
          JS Band Store
        </Link>
        <div className="d-flex align-item-center ml-auto">
          {isAuthenticated && (
            <>
              <Button to="/cart" color="primary">
                Cart ({cartCount})
              </Button>
              <Button color="primary" className="ml-2" onClick={handleSignOut}>
                Sign out
              </Button>
            </>
          )}
          {user && (
            <div className="d-inline-flex align-items-center ml-3">
              <Avatar src={user.avatar} alt={user.username} />
              <b className="ml-2">{user.username}</b>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  isAuthenticated: false,
  user: {
    username: "",
    avatar: ""
  },
  cartCount: 0,
  signOut: () => true
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string
  }),
  cartCount: PropTypes.number,
  signOut: PropTypes.func
}

export default Header
