/* eslint-disable react/prop-types */
import React, { useState } from "react"
import PropsTypes from "prop-types"
import { connect } from "react-redux"

import { signIn } from "../actions/auth"
import { isLoadingSelector, authErrorsSelector } from "../selectors/auth"

import Container from "../components/Container"
import Form from "../components/Form"

const SignIn = ({ isLoading, errors: { message }, onSubmit }) => {
  const [username, setUsername] = useState("")

  const handleOnChange = ({ target: { value } }) => setUsername(value)

  const handleOnSubmit = () => onSubmit({ username })

  const isFailured = message && message.length !== 0

  return (
    <Container className="h-100 d-flex align-items-center justify-content-center">
      <Form onSubmit={handleOnSubmit}>
        <Form.FormGroup>
          <Form.Input
            value={username}
            placeholder="type Username"
            onChange={handleOnChange}
          />
          <Form.Hint show={isFailured} text={message} type="error" />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Button loading={isLoading} type="submit" color="primary" block>
            Sign-In
          </Form.Button>
        </Form.FormGroup>
      </Form>
    </Container>
  )
}

SignIn.propTypes = {
  isLoading: PropsTypes.bool,
  onSubmit: PropsTypes.func.isRequired,
  errors: PropsTypes.shape({})
}

SignIn.defaultProps = {
  isLoading: false,
  errors: {}
}

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  errors: authErrorsSelector(state)
})

const mapDispatchToProps = {
  onSubmit: signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
