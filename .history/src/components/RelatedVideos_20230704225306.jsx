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
  } = useQuery(
    ["related", id],
    () => {
      return youtube.relatedVideo(id);
    },
    { staleTime: 1000 * 60 * 5 }
  );
  console.log(videos);

  const related = true;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😔</p>}

      {videos && (
        <ul>
          {videos.map((video) => {
            return <VideoCard video={video} related={related} />;
          })}
        </ul>
      )}
    </div>
  );
}
