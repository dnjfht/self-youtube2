import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search() {
    return this.httpClient.get("search", params);
  }

  async trend() {
    return this.httpClient.get("videos", params);
  }
}
