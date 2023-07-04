import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { DarkModeContext } from "../context/DarkModeContext";
import { timesAgo } from "../components/VideoCard";

export default function Detail() {
  const { darkMode } = useContext(DarkModeContext);

  const {
    state: { video },
  } = useLocation();
  console.log(video);

  return (
    <div
      className={`${
        darkMode ? "bg-[#1f1e1e] text-white" : "bg-[#d0ac88]"
      } w-full pt-[12px]`}
    >
      <section className="w-10/12 mx-auto flex xl:flex-row sm:flex-col flex-col">
        <article className="xl:w-9/12 sm:w-full w-full">
          <iframe
            id="player"
            type="texy/html"
            width="100%"
            height="640px"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={video.snippet.title}
          />
          <div>
            <h2
              className={`${
                darkMode ? "text-[#f1f1f1]" : "text-[#282828]"
              } text-[1.25rem] font-semibold mt-3`}
            >
              {video.snippet.title}
            </h2>
            <ChannelInfo
              id={video.snippet.channelId}
              title={video.snippet.channelTitle}
            />

            <div
              className={`${
                darkMode
                  ? "bg-[#ffffff1a] hover:bg-[#ffffff3d]"
                  : "bg-[#98724ca2] hover:bg-[#98724ca2]"
              } rounded-xl p-4 box-border mb-10 cursor-pointer transition-all duration-500`}
            >
              <p className="mb-2">{timesAgo(video.snippet.publishedAt)}</p>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        </article>

        <section className="xl:w-3/12 xl:pl-[1.4rem]">
          <RelatedVideos id={video.id} />
        </section>
      </section>
    </div>
  );
}
