import { handleActions } from "redux-actions"
import { setAuthRequest, setAuthSuccess, setAuthFailure } from "../actions/auth"

const initialState = {
  isLoading: false,
  errors: {},
  user: {}
}

export default handleActions(
  {
    [setAuthRequest]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    }),

    [setAuthSuccess]: (state, { payload }) => ({
      ...state,
      user: payload,
      errors: {}
    }),

    [setAuthFailure]: (state, { payload }) => ({
      ...state,
      errors: payload
    })
  },
  initialState
)
