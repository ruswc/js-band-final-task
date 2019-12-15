import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Hint = ({ children, text, show, type }) => {
  const classes = classNames({
    "d-block": show,
    "invalid-feedback": type === "error",
    "valid-feedback": type === "success"
  })

  return (
    <div className={classes}>
      {text}
      {children}
    </div>
  )
}

Hint.defaultProps = {
  show: false,
  text: "",
  children: null,
  type: "success"
}

Hint.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string,
  text: PropTypes.string
}

export default Hint
