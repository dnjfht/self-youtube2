import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { darkMode } = useContext(DarkModeContext);
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios
      .get(`/videos/${keyword ? "keyword" : "trend"}.json`)
      .then((res) => res.data.items);
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
          <ul>
            {videos.map((video) => {
              return <VideoCard video={video} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
