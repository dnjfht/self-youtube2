import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useContext(YoutubeApiContext);

  const { data: imgUrl } = useQuery(["channel", id], () =>
    youtube.channelDetail(id)
  );

  return (
    <div>
      <img src={imgUrl.default.url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
