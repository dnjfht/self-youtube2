import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useContext(YoutubeApiContext);

  const { data: url } = useQuery(["channel", id], () =>
    youtube.channelDetail(id)
  );
  console.log(url.snippet.thumbnails.default.url);

  return (
    <div>
      <img alt={title} />
      <p>{title}</p>
    </div>
  );
}
