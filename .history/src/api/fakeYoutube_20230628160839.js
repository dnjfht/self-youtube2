export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideos();
  }

  async #searchByKeyword() {}

  async #trendVideos() {}
}
