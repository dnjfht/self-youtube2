import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
// import search from "../api/basic-youtube";
// import Youtube from "../api/youtube";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function Videos() {
  const { darkMode } = useContext(DarkModeContext);
  const { keyword } = useParams();
  const { youtube } = useContext(YoutubeApiContext);

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    // const youtube = new Youtube();
    return youtube.search(keyword);
  });

  console.log(videos);

  return (
    <div
      className={`${
        darkMode ? "bg-[#1f1e1e] text-white" : "bg-[#d0ac88]"
      } w-full`}
    >
      <div className="w-10/12 mx-auto pt-6">
        {`${keyword ? keyword : "Trend "} Video List...!`}

        {isLoading && "Loading...!"}
        {error && "Error is occured...!"}
        {videos && (
          <ul className="w-full mt-4 flex flex-wrap">
            {videos.map((video) => {
              return <VideoCard video={video} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
