import { createAction } from "redux-actions"
import axios from "axios"

import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_SINGLE_BOOK_REQUEST,
  FETCH_SINGLE_BOOK_SUCCESS,
  FETCH_SINGLE_BOOK_FAILURE
} from "../types/books"

export const fetchBooksRequest = createAction(FETCH_BOOKS_REQUEST)
export const fetchBooksSuccess = createAction(FETCH_BOOKS_SUCCESS)
export const fetchBooksFailure = createAction(FETCH_BOOKS_FAILURE)

export const fetchBooks = () => async dispatch => {
  try {
    const { data } = await axios({
      url: "https://js-band-api.glitch.me/books",
      method: "GET"
    })

    dispatch(fetchBooksSuccess(data))
  } catch (errors) {
    dispatch(fetchBooksFailure(errors.response.data))
  } finally {
    dispatch(fetchBooksRequest(false))
  }
}

export const fetchSingleBookRequest = createAction(FETCH_SINGLE_BOOK_REQUEST)
export const fetchSingleBookSuccess = createAction(FETCH_SINGLE_BOOK_SUCCESS)
export const fetchSingleBookFailure = createAction(FETCH_SINGLE_BOOK_FAILURE)

export const fetchSingleBook = id => async dispatch => {
  try {
    const { data } = await axios({
      url: `https://js-band-api.glitch.me/books/${id}`,
      method: "GET"
    })

    dispatch(fetchSingleBookSuccess(data))
  } catch (errors) {
    dispatch(fetchSingleBookFailure(errors.response.data))
  } finally {
    dispatch(fetchSingleBookRequest(false))
  }
}

export default {
  fetchBooks,
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  fetchSingleBook,
  fetchSingleBookRequest,
  fetchSingleBookSuccess,
  fetchSingleBookFailure
}
