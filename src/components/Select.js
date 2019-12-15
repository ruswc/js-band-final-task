import React from "react"
import PropTypes from "prop-types"

const Select = ({
  type,
  value,
  name,
  placeholder,
  disabled,
  options,
  onBlur,
  onChange
}) => {
  const handleChange = e => onChange(e)

  return (
    <select
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      className="form-control"
      onBlur={onBlur}
      onChange={handleChange}
    >
      {options.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

Select.defaultProps = {
  type: "text",
  value: "",
  name: "",
  placeholder: "",
  disabled: false,
  onChange: e => e,
  onBlur: e => e
}

Select.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default Select
