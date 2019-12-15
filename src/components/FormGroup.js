import React from "react"
import PropTypes from "prop-types"

const FormGroup = ({ children }) => <div className="form-group">{children}</div>

FormGroup.defaultProps = {
  children: null
}

FormGroup.propTypes = {
  children: PropTypes.node
}

export default FormGroup
