import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useContext(YoutubeApiContext);

  const { data: imgUrl } = useQuery(
    ["channel", id],
    () => youtube.channelDetail(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="w-full pt-3 pb-4 flex items-center">
      {url && (
        <img
          className="w-[2.5rem] h-[40px] object-cover rounded-full"
          src={imgUrl}
          alt={title}
        />
      )}
      <p>{title}</p>
    </div>
  );
}
