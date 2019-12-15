/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import booksActions from "actions/books"
import cartActions from "actions/cart"
import { isLoadingSelector, booksSelector } from "selectors/books"

import Container from "components/Container"
import Button from "components/Button"
import Card from "components/Card"
import Spinner from "components/Spinner"
import Input from "components/Input"
import Select from "components/Select"

class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      cart: null,
      search: "",
      price: "all"
    }
  }

  componentDidMount() {
    const { fetchData } = this.props

    fetchData()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.items !== state.items) {
      return {
        items: props.items
      }
    }

    return null
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState(() => ({
      [name]: value
    }))
  }

  addToCart = ({ target: { value } }) => {
    const { addToCart } = this.props
    const { id = "", title = "", price = 0 } = JSON.parse(value)

    this.setState(
      () => ({ cart: id }),
      () => {
        addToCart({ id, count: 1, title, price })
        setTimeout(() => this.setState(() => ({ cart: null })), 1000)
      }
    )
  }

  render() {
    const { isLoading } = this.props
    const { cart, search, price, items } = this.state
    const options = [
      {
        label: "All",
        value: "all",
        filter: a => a
      },
      {
        label: "0 < price < 15",
        value: "l1",
        filter: a => a.price < 15
      },
      {
        label: "15 < price < 30",
        value: "15to30",
        filter: a => a.price >= 15 && a.price < 30
      },
      {
        label: "price > 30",
        value: "m30",
        filter: a => a.price >= 30
      }
    ]

    const filteredItems = items.filter(
      item =>
        options.find(option => option.value === price).filter(item) &&
        item.title.includes(search)
    )

    if (isLoading) {
      return (
        <Container>
          <Spinner growing />
        </Container>
      )
    }

    return (
      <>
        <Container className="mb-3">
          <Container.Row>
            <Container.Col className="col-3">
              <Input
                value={search}
                name="search"
                placeholder="Search by book name"
                onChange={this.handleChange}
              />
            </Container.Col>
            <Container.Col className="col-3">
              <Select
                value={price}
                options={options}
                name="price"
                onChange={this.handleChange}
              />
            </Container.Col>
          </Container.Row>
        </Container>
        <Container>
          <Container.Row>
            {filteredItems.length !== 0 ? (
              filteredItems.map(item => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5">
                  <Card className="h-100">
                    <Card.Cover src={item.cover} alt={item.title} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.author}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Row className="align-items-center">
                        <Card.Col className="col-3 text-nowrap">${item.price}</Card.Col>
                        <Card.Col className="text-right col-9">
                          <Button
                            color="primary"
                            value={JSON.stringify(item)}
                            onClick={this.addToCart}
                            className="text-nowrap mt-2"
                          >
                            {cart === item.id ? "Added" : "Add to cart"}
                          </Button>
                          <Button
                            to={`/books/${item.id}`}
                            color="primary"
                            className="ml-2 text-nowrap mt-2"
                          >
                            View
                          </Button>
                        </Card.Col>
                      </Card.Row>
                    </Card.Footer>
                  </Card>
                </div>
              ))
            ) : (
              <Container.Col className="text-center">
                <h1>No books</h1>
              </Container.Col>
            )}
          </Container.Row>
        </Container>
      </>
    )
  }
}

Books.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

Books.defaultProps = {
  isLoading: true,
  items: []
}

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  items: booksSelector(state)
})

const mapDispatchToProps = {
  fetchData: booksActions.fetchBooks,
  setFilterField: booksActions.setFilterField,
  addToCart: cartActions.addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
