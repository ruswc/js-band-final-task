/* eslint-disable import/no-cycle */
import { handleActions } from "redux-actions"
import {
  signOut,
  setAuthRequest,
  setAuthSuccess,
  setAuthFailure
} from "actions/auth"

const initialState = {
  isAuthenticated: false,
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
      isAuthenticated: true,
      user: payload,
      errors: {}
    }),

    [setAuthFailure]: (state, { payload }) => ({
      ...state,
      errors: payload
    }),

    [signOut]: () => initialState
  },
  initialState
)
