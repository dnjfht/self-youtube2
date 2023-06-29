import axios from "axios";

export default class Youtube {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
    });
  }
}
