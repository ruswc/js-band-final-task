import { createAction } from "redux-actions"

import {
  ADD_TO_CART,
  PURCHASE_REQUEST,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE
} from "types/cart"

import services from "services/cart"

export const addToCart = createAction(ADD_TO_CART)

export const purchaseRequest = createAction(PURCHASE_REQUEST)
export const purchaseSuccess = createAction(PURCHASE_SUCCESS)
export const purchaseFailure = createAction(PURCHASE_FAILURE)

export const purchase = ({ books = [] }) => async dispatch => {
  if (!books.length) return

  dispatch(purchaseRequest(true))

  try {
    const {
      data: { message }
    } = await services.purchase({ books })
    // eslint-disable-next-line no-alert
    alert(message)
    dispatch(purchaseSuccess())
  } catch (errors) {
    dispatch(purchaseFailure())
  } finally {
    dispatch(purchaseRequest(false))
  }
}

export default {
  addToCart,
  purchase,
  purchaseRequest,
  purchaseSuccess,
  purchaseFailure
}
