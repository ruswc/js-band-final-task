/* eslint-disable import/prefer-default-export */
import { createSelector } from "reselect"

export const isLoadingSelector = state => state.books.isLoading

export const booksSelector = state => state.books.books

export const getBookById = id =>
  createSelector(booksSelector, books => books.find(item => item.id === id))
