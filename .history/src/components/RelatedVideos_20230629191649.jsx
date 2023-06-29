import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useContext(YoutubeApiContext);

  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => {
    youtube.relatedVideo(id);
  });
  console.log(videos);

  return (
    <div>
      {videos && (
        <ul>
          {videos.map((video) => {
            return <VideoCard video={video} />;
          })}
        </ul>
      )}
    </div>
  );
}
