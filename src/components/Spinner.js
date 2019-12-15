import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Spinner = ({ color, size, growing, text }) => {
  const classes = classNames({
    "spinner-border": !growing,
    "spinner-grow": growing,
    [`text-${color}`]: color,
    [`spinner-border-${size}`]: size
  })

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className={classes} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <span className="ml-3">{text}</span>
    </div>
  )
}

Spinner.defaultProps = {
  color: "",
  size: "",
  text: "",
  growing: false
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  growing: PropTypes.bool
}

export default Spinner
