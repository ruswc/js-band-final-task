/* eslint-disable import/no-named-as-default-member */
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import actions from "actions/cart"
import {
  cartLoadingSelector,
  cartSummarySelector,
  cartTotalPriceSelector,
  booksIdSelector
} from "selectors/cart"

import Container from "components/Container"
import Button from "components/Button"
import Spinner from "components/Spinner"

const Cart = ({ isLoading, isCartEmpty, items, total, itemsIds, purchase }) => {
  const handlePurchase = () => purchase({ books: itemsIds })

  if (isLoading) {
    return (
      <Container>
        <Spinner text="Purchasing" growing />
      </Container>
    )
  }

  return (
    <>
      <Container className="text-right mb-3">
        <Button
          disabled={isCartEmpty || isLoading}
          color="primary"
          onClick={handlePurchase}
        >
          Purchase
        </Button>
      </Container>

      {isCartEmpty && !isLoading ? (
        <Container className="text-center">Cart Empty...</Container>
      ) : (
        <Container>
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
                <tr key={item.title}>
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
        </Container>
      )}
    </>
  )
}

Cart.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  total: PropTypes.number,
  isCartEmpty: PropTypes.bool,
  purchase: PropTypes.func.isRequired,
  itemsIds: PropTypes.arrayOf(PropTypes.string)
}

Cart.defaultProps = {
  isLoading: false,
  items: [],
  total: 0,
  isCartEmpty: false,
  itemsIds: []
}

const mapStateToProps = state => ({
  isLoading: cartLoadingSelector(state),
  items: cartSummarySelector(state),
  total: cartTotalPriceSelector(state),
  isCartEmpty: cartSummarySelector(state).length === 0,
  itemsIds: booksIdSelector(state)
})

const mapDispatchToProps = {
  purchase: actions.purchase
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
