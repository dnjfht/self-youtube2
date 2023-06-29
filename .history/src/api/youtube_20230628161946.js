import axios from "axios";

export default class Youtube {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVides();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
        type: "video",
      },
    });
  }

  async #trendVideos() {
    return;
  }
}
