import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();
  console.log(video);

  return (
    <div>
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

        <section></section>
      </div>
    </div>
  );
}
