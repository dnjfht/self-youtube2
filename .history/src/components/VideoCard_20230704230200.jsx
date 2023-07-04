import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

export default function VideoCard({ video, related }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;
  const { publishedAt } = video.snippet;
  const { channelTitle } = video.snippet;

  const navigate = useNavigate();

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        related
          ? "w-full flex mb-3 text-[0.76rem]"
          : "2xl:w-[19.6%] xl:w-[24.4%] lg:w-[32.6%] md:w-[49.4%] sm:w-full w-full text-[0.9rem]"
      } cursor-pointer`}
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={`${
          related ? "xl:w-1/2 sm:w-1/4 h-[94px] rounded-md" : "w-full"
        } object-cover`}
        src={url}
        alt={title}
      />

      <div className="mt-2 text-[1rem]">
        <p
          className={`${
            related ? "xl:block sm:hidden hidden" : ""
          } mt-1 font-medium`}
        >{`${related ? truncate(title, 28) : truncate(title, 54)}`}</p>
        <p
          className={`${
            related ? "block xl:hidden sm:block" : "hidden"
          } text-[0.875rem] font-semibold`}
        >
          {title}
        </p>
        <p
          className={`${
            darkMode ? "text-[#aaa]" : "text-[#3f3f3f]"
          } text-[0.875rem] mt-3`}
        >
          {timesAgo(publishedAt)}
        </p>
        <p
          className={`${
            darkMode ? "text-[#aaa]" : "text-[#3f3f3f]"
          } text-[0.875rem] mb-10`}
        >
          {channelTitle}
        </p>
      </div>
    </div>
  );
}

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

export const timesAgo = (day) => {
  // timeago.js라는 라이브러리를 사용해도 된다.

  const givenDate = new Date(day);
  const currentDate = new Date();

  // 주어진 날짜와 현재 날짜 사이의 초 차이 계산
  const millisecondsPerSecond = 1000; // 1초는 1000밀리초입니다.
  const seconds = Math.round(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerSecond
  );

  // 주어진 날짜와 현재 날짜 사이의 분 차이 계산
  const millisecondsPerMinute = 60 * 1000; // 1분은 60초 * 1000밀리초입니다.
  const minutes = Math.round(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerMinute
  );

  const times = Math.ceil(
    (currentDate.getTime() - givenDate.getTime()) / (1000 * 60 * 60)
  );

  // 주어진 날짜와 현재 날짜 사이의 일 수 계산
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const days = Math.round(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerDay
  );

  const months =
    // 주어진 날짜와 현재 날짜 사이의 월 수 계산
    (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
    (currentDate.getMonth() - givenDate.getMonth());

  const years =
    // 주어진 날짜와 현재 날짜 사이의 연도 차이 계산
    currentDate.getFullYear() - givenDate.getFullYear();

  return years > 0
    ? years + "년 전"
    : months > 0
    ? months + "달 전"
    : days > 0
    ? days + "일 전"
    : times > 0
    ? times + "시간 전"
    : minutes > 0
    ? minutes + "분 전"
    : seconds + "초 전";
};
