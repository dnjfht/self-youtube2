import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;
  const { publishedAt } = video.snippet;
  const { channelTitle } = video.snippet;

  const navigate = useNavigate();

  return (
    <div
      className="w-[24%] cursor-pointer"
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className="w-full object-cover rounded-xl" src={url} alt={title} />

      <div className="mt-\1">
        <p>{title}</p>
        <p>{publishedAt}</p>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}
