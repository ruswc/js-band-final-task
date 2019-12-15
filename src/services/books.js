import client from "helpers/api"

export default {
  fetchData: () =>
    client({
      url: "/books",
      method: "GET"
    }),

  fetchSingle: id =>
    client({
      url: `/books/${id}`,
      method: "GET"
    })
}
