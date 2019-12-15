/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetchSingleBook } from "actions/books"
import cartActions from "actions/cart"
import { isSingleLoadingSelector, getBookById } from "selectors/books"
import { getCountById } from "selectors/cart"

import Container from "components/Container"
import Card from "components/Card"
import FormGroup from "components/FormGroup"
import Input from "components/Input"
import Button from "components/Button"
import Spinner from "components/Spinner"

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    const {
      fetchData,
      match: {
        params: { id = "" }
      }
    } = this.props

    fetchData(id)
  }

  handleCountChange = ({ target: { value } }) =>
    this.setState(() => ({
      count: value
    }))

  handleAddToCart = ({ target: { value } }) => {
    const {
      addToCart,
      item: { title, price }
    } = this.props
    const { count } = this.state

    addToCart({ id: value, count, title, price })
  }

  render() {
    const { count } = this.state
    const { isLoading, item, cartCount } = this.props

    const total = +(count * item.price).toFixed(2)
    const disabled = +cartCount >= +item.count

    if (isLoading) {
      return (
        <Container>
          <Spinner growing />
        </Container>
      )
    }

    return (
      <Container>
        <Card.Row className="d-flex justify-content-center">
          <Card.Col className="col-12 col-sm-10 col-lg-8 col-xl-6">
            <Card className="p-4">
              <Card.Row>
                <Card.Col className="col-12 col-md-4">
                  <Card.Cover src={item.cover} />
                  <Card.Text className="p-4">{item.description}</Card.Text>
                </Card.Col>
                <Card.Col className="col-12 col-md-4 pt-5">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.author}</Card.Text>
                  <Card.Text>{item.level}</Card.Text>
                  <Card.Text>{item.tags.join(", ")}</Card.Text>
                </Card.Col>
                <Card.Col className="col-12 col-md-4 pt-5">
                  <FormGroup>
                    <Card.Text className="d-flex">
                      <Card.Col>Price, $</Card.Col>
                      <Card.Col className="text-right">{item.price}</Card.Col>
                    </Card.Text>
                  </FormGroup>
                  <FormGroup>
                    <Card.Text className="d-flex">
                      <Card.Col>Count</Card.Col>
                      <Card.Col className="d-flex justify-content-end">
                        <Input
                          value={count}
                          min={0}
                          max={item.count}
                          type="number"
                          disabled={disabled}
                          onChange={this.handleCountChange}
                        />
                      </Card.Col>
                    </Card.Text>
                  </FormGroup>
                  <FormGroup>
                    <Card.Text className="d-flex">
                      <Card.Col>Total Price</Card.Col>
                      <Card.Col className="text-right">{total}</Card.Col>
                    </Card.Text>
                  </FormGroup>
                  <FormGroup>
                    <Card.Text className="text-right">
                      <Card.Col>
                        <Button
                          color="primary"
                          value={item.id}
                          disabled={disabled}
                          onClick={this.handleAddToCart}
                        >
                          Add to cart
                        </Button>
                      </Card.Col>
                    </Card.Text>
                  </FormGroup>
                </Card.Col>
              </Card.Row>
            </Card>
          </Card.Col>
        </Card.Row>
      </Container>
    )
  }
}

Book.propTypes = {
  isLoading: PropTypes.bool,
  fetchData: PropTypes.func.isRequired,
  item: PropTypes.shape({})
}

Book.defaultProps = {
  isLoading: true,
  item: {
    tags: [],
    price: 0
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  isLoading: isSingleLoadingSelector(state),
  item: getBookById(id)(state),
  cartCount: getCountById(id)(state)
})

const mapDispatchToProps = {
  fetchData: fetchSingleBook,
  addToCart: cartActions.addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
