import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async channel() {
    return axios.get("/videos/channel.json");
  }

  async search({ params }) {
    return axios.get(
      `/videos/${params.relatedToVideoId ? "related" : "keyword"}.json`
    );
  }

  async trend() {
    return axios.get("/videos/trend.json");
  }
}
