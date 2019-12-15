import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { cartSummarySelector, cartTotalPriceSelector } from "../selectors/cart"

import Container from "../components/Container"
import Button from "../components/Button"

const Cart = ({ isCartEmpty, items, total }) => (
  <Container>
    <Button>Purchase</Button>
    {isCartEmpty ? (
      "Empty..."
    ) : (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Book name</th>
            <th scope="col">Count</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>
              <td>{item.title}</td>
              <td>{item.count}</td>
              <td align="right">{item.total}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" align="right">
              <b>Total price $ {total}</b>
            </td>
          </tr>
        </tbody>
      </table>
    )}
  </Container>
)

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  total: PropTypes.number,
  isCartEmpty: PropTypes.bool
}

Cart.defaultProps = {
  items: [],
  total: 0,
  isCartEmpty: false
}

const mapStateToProps = state => ({
  items: cartSummarySelector(state),
  total: cartTotalPriceSelector(state),
  isCartEmpty: cartSummarySelector(state).length === 0
})

export default connect(mapStateToProps)(Cart)
