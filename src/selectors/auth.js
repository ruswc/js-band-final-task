/* eslint-disable import/prefer-default-export */
export const isAuthenticatedSelector = state => state.auth.isAuthenticated

export const isLoadingSelector = state => state.auth.isLoading

export const authErrorsSelector = state => state.auth.errors

export const userSelector = state => state.auth.user
