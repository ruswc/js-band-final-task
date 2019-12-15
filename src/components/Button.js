import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import classNames from "classnames"

import Spinner from "./Spinner"

const Button = ({
  children,
  value,
  to,
  loading,
  disabled,
  type,
  color,
  block,
  className,
  onClick
}) => {
  const classes = classNames("btn", {
    "btn-block": block,
    [`btn-${color}`]: color,
    [className]: className
  })

  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      value={value}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {loading ? <Spinner size="sm" /> : children}
    </button>
  )
}

Button.defaultProps = {
  children: null,
  color: "",
  block: false,
  type: "button",
  loading: false,
  to: "",
  value: "",
  disabled: false,
  className: '',
  onClick: e => e
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  block: PropTypes.bool,
  type: PropTypes.string,
  loading: PropTypes.bool,
  to: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
