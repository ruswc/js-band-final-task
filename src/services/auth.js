import client from "helpers/api"

export default {
  signIn: data =>
    client({
      url: "/signin",
      method: "POST",
      data
    })
}
