import axios from "axios";

export default class Youtube {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {}
}
