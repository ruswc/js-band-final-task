/* eslint-disable import/no-cycle */
import { handleActions, combineActions } from "redux-actions"
import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  fetchSingleBookRequest,
  fetchSingleBookSuccess,
  fetchSingleBookFailure
} from "actions/books"

const initialState = {
  isLoading: true,
  isSingleLoading: true,
  errors: {},
  books: []
}

export default handleActions(
  {
    [fetchBooksRequest]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    }),

    [fetchBooksSuccess]: (state, { payload }) => ({
      ...state,
      books: payload,
      errors: {}
    }),

    [combineActions(fetchBooksFailure, fetchSingleBookFailure)]: (
      state,
      { payload }
    ) => ({
      ...state,
      errors: payload
    }),

    [fetchSingleBookRequest]: (state, { payload }) => ({
      ...state,
      isSingleLoading: payload
    }),

    [fetchSingleBookSuccess]: (state, { payload }) => ({
      ...state,
      books: [...state.books, payload],
      errors: {}
    })
  },
  initialState
)
