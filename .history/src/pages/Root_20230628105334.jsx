import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../context/DarkModeContext";

export default function Root() {
  return (
    <DarkModeProvider>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </DarkModeProvider>
  );
}
