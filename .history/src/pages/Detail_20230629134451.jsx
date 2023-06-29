import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();
  console.log(video);

  return <div>Detail</div>;
}
