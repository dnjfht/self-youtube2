import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideos();
  }

  async #searchByKeyword() {
    return axios
      .get("/videos/keyword.json") //
      .then((res) => res.data.items);
  }

  async #trendVideos() {}
}
