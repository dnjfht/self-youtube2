import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useContext(YoutubeApiContext);

  const { data: channel } = useQuery(["channel", id], () => {
    youtube.channelDetail(id);
  });
  console.log(channel);
  return <div>channelInfo</div>;
}
