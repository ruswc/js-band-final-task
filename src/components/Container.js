import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Row = ({ children, className }) => {
  const classes = classNames("row", {
    [className]: className
  })
  return <div className={classes}>{children}</div>
}

const Col = ({ children, className }) => {
  const classes = classNames("col", {
    [className]: className
  })
  return <div className={classes}>{children}</div>
}

const Container = ({ children, fluid, className }) => {
  const classes = classNames("container", {
    "container-fluid": fluid,
    [className]: className
  })

  return <div className={classes}>{children}</div>
}

Container.Row = Row
Container.Col = Col

Container.defaultProps = {
  children: null,
  className: "",
  fluid: false
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string
}

Row.defaultProps = {
  children: null,
  className: ""
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Col.defaultProps = {
  children: null,
  className: ""
}

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Container
