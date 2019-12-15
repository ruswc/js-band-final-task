import { createSelector } from "reselect"

export const cartSelector = state => state.cart.items

export const cartSummarySelector = createSelector(cartSelector, list =>
  Object.keys(list).map(id => ({
    ...list[id],
    id,
    total: +list[id].count * +list[id].price
  }))
)

export const cartTotalPriceSelector = createSelector(
  cartSummarySelector,
  list => list.reduce((acc, { total = 0 }) => acc + total, 0)
)

export const getCountById = id =>
  createSelector(cartSelector, items => items[id])

export default {
  cartSelector,
  getCountById,
  cartSummarySelector,
  cartTotalPriceSelector
}
