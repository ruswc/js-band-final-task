import { createAction } from "redux-actions"
import axios from "axios"

import {
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE
} from "../types/auth"

export const setAuthRequest = createAction(SET_AUTH_REQUEST)
export const setAuthSuccess = createAction(SET_AUTH_SUCCESS)
export const setAuthFailure = createAction(SET_AUTH_FAILURE)

export const signIn = value => async dispatch => {
  dispatch(setAuthRequest(true))

  try {
    const {
      data: { token, avatar, username }
    } = await axios({
      url: "https://js-band-api.glitch.me/signin",
      method: "POST",
      data: value
    })

    if (token) {
      localStorage.setItem("token", token)
      axios.defaults.headers.common = { Authorization: `bearer ${token}` }
    }

    dispatch(setAuthSuccess({ username, avatar }))
  } catch (errors) {
    dispatch(setAuthFailure(errors.response.data))
  } finally {
    dispatch(setAuthRequest(false))
  }
}

export default {
  signIn,
  setAuthRequest,
  setAuthSuccess,
  setAuthFailure
}
