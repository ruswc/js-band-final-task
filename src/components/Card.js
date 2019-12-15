import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Title = ({ children }) => <h2 className="card-title h5">{children}</h2>

const Body = ({ children }) => <div className="card-body">{children}</div>

const Col = ({ children, className }) => (
  <div
    className={classNames("col", {
      [className]: className
    })}
  >
    {children}
  </div>
)

const Row = ({ children, className }) => (
  <div
    className={classNames("row", {
      [className]: className
    })}
  >
    {children}
  </div>
)

const Text = ({ children, className }) => (
  <div
    className={classNames("card-text", {
      [className]: className
    })}
  >
    {children}
  </div>
)

const Cover = ({ src, alt }) => (
  <img src={src} className="card-img-top img-fluid" alt={alt} />
)

const Footer = ({ children }) => <div className="card-footer">{children}</div>

const Card = ({ children, className }) => (
  <div
    className={classNames("card", {
      [className]: className
    })}
  >
    {children}
  </div>
)

Card.Title = Title
Card.Text = Text
Card.Body = Body
Card.Cover = Cover
Card.Footer = Footer
Card.Col = Col
Card.Row = Row

Title.defaultProps = {
  children: null
}

Title.propTypes = {
  children: PropTypes.node
}

Body.defaultProps = {
  children: null
}

Body.propTypes = {
  children: PropTypes.node
}

Text.defaultProps = {
  children: null,
  className: ""
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Cover.defaultProps = {
  src: "",
  alt: ""
}

Cover.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

Footer.defaultProps = {
  children: null
}

Footer.propTypes = {
  children: PropTypes.node
}

Col.defaultProps = {
  children: null,
  className: ""
}

Col.propTypes = {
  children: PropTypes.node,
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

Card.defaultProps = {
  children: null,
  className: ""
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
