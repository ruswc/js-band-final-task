import axios from "axios"

axios.defaults.baseURL = "https://js-band-api.glitch.me"

export default {
  signIn: data =>
    axios({
      url: "/signin",
      method: "POST",
      data
    })
}
