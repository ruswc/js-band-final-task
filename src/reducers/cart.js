import { handleActions } from "redux-actions"
import { addToCart } from "../actions/cart"

const initialState = {
  items: {}
}

export default handleActions(
  {
    [addToCart]: (state, { payload: { id, count, ...rest } }) => ({
      ...state,
      items: {
        ...state.items,
        [id]: state.items[id]
          ? {
              ...rest,
              count: +state.items[id].count + +count
            }
          : { count, ...rest }
      }
    })
  },
  initialState
)
