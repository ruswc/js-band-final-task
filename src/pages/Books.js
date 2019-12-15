/* eslint-disable react/prop-types */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetchBooks } from "../actions/books"
import { isLoadingSelector, booksSelector } from "../selectors/books"

import Container from "../components/Container"
import Button from "../components/Button"
import Card from "../components/Card"

class Books extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  render() {
    const { items } = this.props

    return (
      <Container>
        <Container.Row>
          {items.map(item => (
            <div key={item.id} className="col col-sm-4 mb-5">
              <Card className="h-100">
                <Card.Cover src={item.cover} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.author}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Row className="align-items-center">
                    <Card.Col>{item.price}</Card.Col>
                    <Card.Col className="text-right">
                      <Button to={`/books/${item.id}`} color="primary">
                        View
                      </Button>
                    </Card.Col>
                  </Card.Row>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Container.Row>
      </Container>
    )
  }
}

Books.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired
}

Books.defaultProps = {
  items: []
}

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  items: booksSelector(state)
})

const mapDispatchToProps = {
  fetchData: fetchBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
