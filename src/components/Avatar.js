import React from "react"
import PropTypes from "prop-types"

const Avatar = ({ src, alt }) => (
  <img src={src} alt={alt} className="rounded-circle" width="38" height="38" />
)

Avatar.defaultProps = {
  src: "",
  alt: ""
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Avatar
