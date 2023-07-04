import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { DarkModeContext } from "../context/DarkModeContext";

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
      } w-full pt-[12px] text-white`}
    >
      <div>
        <article>
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
            <h2>{video.snippet.title}</h2>
            <ChannelInfo
              id={video.snippet.channelId}
              title={video.snippet.channelTitle}
            />
          </div>
        </article>

        <section>
          <RelatedVideos id={video.id} />
        </section>
      </div>
    </div>
  );
}
