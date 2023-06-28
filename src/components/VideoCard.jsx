import React from "react";

export default function VideoCard({ video }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;
  const { publishedAt } = video.snippet;
  const { channelTitle } = video.snippet;

  return (
    <div key={video.id}>
      <img src={url} alt={title} />

      <div>
        <p>{title}</p>
        <p>{publishedAt}</p>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}
