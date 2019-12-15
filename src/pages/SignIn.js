/* eslint-disable react/prop-types */
import React, { Component } from "react"
import PropsTypes from "prop-types"
import { connect } from "react-redux"

import { signIn } from "actions/auth"
import { isLoadingSelector, authErrorsSelector } from "selectors/auth"

import Container from "components/Container"
import Form from "components/Form"

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      errorMessage: ""
    }
  }

  handleOnChange = ({ target: { value } }) => this.setState({ username: value })

  handleOnSubmit = () => {
    const { onSubmit } = this.props
    const { username } = this.state

    if (!username || username.length < 4 || username.length > 16)
      return this.setState(() => ({ errorMessage: "Field is not valid" }))

    onSubmit({ username })
  }

  render() {
    const {
      isLoading,
      errors: { message }
    } = this.props
    const { username, errorMessage } = this.state
    const isFailured =
      errorMessage.length !== 0 || (message && message.length !== 0)

    return (
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Container.Col className="col-5">
          <Form onSubmit={this.handleOnSubmit}>
            <Form.FormGroup>
              <Form.Input
                value={username}
                placeholder="Type Username"
                onChange={this.handleOnChange}
              />
              <Form.Hint
                show={isFailured}
                text={errorMessage || message}
                type="error"
              />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Button
                loading={isLoading}
                disabled={!username}
                type="submit"
                color="primary"
                block
              >
                Sign-In
              </Form.Button>
            </Form.FormGroup>
          </Form>
        </Container.Col>
      </Container>
    )
  }
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
