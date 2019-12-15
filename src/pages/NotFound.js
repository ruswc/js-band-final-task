import React from "react"

import Container from "components/Container"
import Button from "components/Button"

const NotFound = () => (
  <Container className="text-center pt-5">
    <h1>Not Found</h1>
    <Button to="/" color="primary">
      Back to home page
    </Button>
  </Container>
)

export default NotFound
