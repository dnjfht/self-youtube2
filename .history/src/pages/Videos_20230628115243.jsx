import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Videos() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "bg-[#1f1e1e]" : "bg-[#d0ac88]"} w-full`}>
      <div></div>
    </div>
  );
}
