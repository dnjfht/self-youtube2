import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../context/DarkModeContext";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <queryClient client={client}>
      <DarkModeProvider>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </DarkModeProvider>
    </queryClient>
  );
}
