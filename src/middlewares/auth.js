import { SIGN_OUT, AUTH_TOKEN_KEY } from "types/auth"
import storage from "helpers/storage"

const authMiddleware = () => next => action => {
  if (action.type === SIGN_OUT) {
    storage.removeItem(AUTH_TOKEN_KEY)
  }
  next(action)
}

export default authMiddleware
