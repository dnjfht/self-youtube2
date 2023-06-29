import axios from "axios";

export default async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? "keyword" : "trend"}.json`)
    .then((res) => res.data.items);
}
