import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Spinner = ({ color, size }) => {
  const classes = classNames("spinner-border", {
    [`text-${color}`]: color,
    [`spinner-border-${size}`]: size
  })

  return (
    <div className={classes} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

Spinner.defaultProps = {
  color: "",
  size: ""
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

export default Spinner
