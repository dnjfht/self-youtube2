export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#trendVideos();
  }

  async channelDetail(id) {
    return this.apiClient //
      .channel({
        params: {
          part: "snippet",
          id: id,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async relatedVideo(id) {
    return this.apiClient //
      .search({
        params: {
          part: "snippet",
          relatedToVideoId: id,
          type: "video",
        },
      })
      .then((res) => res.data.items) //
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #searchByKeyword(keyword) {
    return this.apiClient //
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      })
      .then((res) => res.data.items) //
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #trendVideos() {
    return this.apiClient //
      .trend({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
          type: "video",
        },
      })
      .then((res) => res.data.items);
  }
}
