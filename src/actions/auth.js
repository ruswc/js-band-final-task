import { createAction } from "redux-actions"
import services from "services/auth"
import storage from "helpers/storage"
import client from "helpers/api"

import {
  AUTH_TOKEN_KEY,
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  SIGN_OUT
} from "types/auth"

export const setAuthRequest = createAction(SET_AUTH_REQUEST)
export const setAuthSuccess = createAction(SET_AUTH_SUCCESS)
export const setAuthFailure = createAction(SET_AUTH_FAILURE)

export const signIn = value => async dispatch => {
  dispatch(setAuthRequest(true))

  try {
    const {
      data: { token, avatar, username }
    } = await services.signIn(value)

    if (token) {
      storage.setItem(AUTH_TOKEN_KEY, token)
      client.setAuthHeader(token)
    }

    dispatch(setAuthSuccess({ username, avatar }))
  } catch (errors) {
    const { response: { data } = {} } = errors
    dispatch(setAuthFailure(data))
  } finally {
    dispatch(setAuthRequest(false))
  }
}

export const signOut = createAction(SIGN_OUT)

export default {
  signIn,
  signOut,
  setAuthRequest,
  setAuthSuccess,
  setAuthFailure
}
