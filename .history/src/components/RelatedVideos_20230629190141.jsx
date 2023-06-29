import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function RelatedVideos({ id }) {
  const youtube = useContext(YoutubeApiContext);

  const { error, isLoading, data: videos } = useQuery(["related", id]);
  return <div>RelatedVideos</div>;
}
