import { createSelector } from "reselect"

export const cartSelector = state => state.cart.items

export const cartLoadingSelector = state => state.cart.isLoading

export const cartSummarySelector = createSelector(cartSelector, list =>
  Object.keys(list).map(id => ({
    ...list[id],
    id,
    total: +(+list[id].count * +list[id].price).toFixed(2)
  }))
)

export const cartProductsCountSelector = createSelector(
  cartSummarySelector,
  list => list.reduce((acc, { count = 0 }) => acc + count, 0)
)

export const cartTotalPriceSelector = createSelector(
  cartSummarySelector,
  list => +list.reduce((acc, { total = 0 }) => acc + total, 0).toFixed(2)
)

export const booksIdSelector = createSelector(cartSelector, items =>
  Object.keys(items)
)

export const getCountById = id =>
  createSelector(cartSelector, items => items[id])

export default {
  cartSelector,
  getCountById,
  cartSummarySelector,
  cartTotalPriceSelector,
  cartProductsCountSelector
}
