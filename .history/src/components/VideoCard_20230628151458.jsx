import React from "react";

export default function VideoCard({ video }) {
  const { url } = video.snippet.thumbnails.medium;

  return <div key={video.id}></div>;
}
