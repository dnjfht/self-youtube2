import React from "react";

export default function VideoCard({ video }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;

  return (
    <div key={video.id}>
      <img src={url} alt={title} />

      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}
