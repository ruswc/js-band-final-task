import React from "react"
import PropTypes from "prop-types"

const Input = ({ type, value, placeholder, disabled, min, max, onChange }) => {
  const handleChange = e => {
    if ((max && e.target.value > max) || (min && e.target.value < min)) return

    onChange(e)
  }
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
      disabled={disabled}
      className="form-control"
      onChange={handleChange}
    />
  )
}

Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  min: 0,
  max: 1000,
  disabled: false
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default Input
