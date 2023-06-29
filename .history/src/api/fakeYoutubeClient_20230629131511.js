import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search() {
    return axios.get("/videos/keyword.json");
  }

  async trend() {
    return axios.get("/videos/trend.json");
  }
}
