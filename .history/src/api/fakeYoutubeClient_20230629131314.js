import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search() {
    return axios.get("/videos/keyword.json");
  }

  async trend() {
    return axios.get("/videos/trend.json");
  }
}
