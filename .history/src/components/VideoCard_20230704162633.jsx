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

      <div className="mt-2 text-[1rem]">
        <p>{`${related ? "" : truncate(title, 54)}`}</p>
        <p>{publishedAt}</p>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};
