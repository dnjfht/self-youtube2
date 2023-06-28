import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Videos() {
  const { darkMode } = useContext(DarkModeContext);

  return <div>Videos</div>;
}
