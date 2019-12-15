import React from "react"
import PropTypes from "prop-types"

import Input from "./Input"
import Hint from "./Hint"
import Button from "./Button"
import FormGroup from "./FormGroup"

const Form = ({ children, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(e)
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

Form.Input = Input
Form.Hint = Hint
Form.Button = Button
Form.FormGroup = FormGroup

Form.defaultProps = {
  children: null
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired
}

export default Form
