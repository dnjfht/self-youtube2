import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, related }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;
  const { publishedAt } = video.snippet;
  const { channelTitle } = video.snippet;

  const navigate = useNavigate();

  return (
    <div
      className="w-[24%] cursor-pointer"
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className="w-full object-cover rounded-xl" src={url} alt={title} />

      <div className="mt-2 text-[1rem]">
        <p className="font-medium">{`${related ? "" : truncate(title, 54)}`}</p>
        <p className="text-[0.875rem]">{timesAgo(publishedAt)}</p>
        <p className="text-[0.875rem]>{channelTitle}</p>
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
