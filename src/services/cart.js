import client from "helpers/api"

export default {
  purchase: data =>
    client({
      url: "/purchase",
      method: "POST",
      data
    })
}
