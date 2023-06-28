import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { darkMode } = useContext(DarkModeContext);
  const { keyword } = useParams();

  return (
    <div className={`${darkMode ? "bg-[#1f1e1e]" : "bg-[#d0ac88]"} w-full`}>
      <div className="w-10/12 mx-auto pt-6">
        <h1>{`${keyword ? "Trend " : keyword} Video...!`}</h1>
      </div>
    </div>
  );
}
