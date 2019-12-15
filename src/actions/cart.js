import { createAction } from "redux-actions"

import { ADD_TO_CART } from "../types/cart"

export const addToCart = createAction(ADD_TO_CART)

export default {
  addToCart
}
