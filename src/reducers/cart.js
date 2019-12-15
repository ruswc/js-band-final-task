/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default-member */
import { handleActions } from "redux-actions"
import actions from "actions/cart"

const initialState = {
  isLoading: false,
  items: {}
}

export default handleActions(
  {
    [actions.addToCart]: (state, { payload: { id, count, ...rest } }) => ({
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
    }),

    [actions.purchaseRequest]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    }),

    [actions.purchaseSuccess]: () => initialState
  },
  initialState
)
