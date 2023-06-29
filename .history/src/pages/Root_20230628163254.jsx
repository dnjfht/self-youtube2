import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "../context/YoutubeApiContext";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <YoutubeApiProvider>
        <DarkModeProvider>
          <div>
            <Navbar />
            <Outlet />
          </div>
        </DarkModeProvider>
      </YoutubeApiProvider>
    </QueryClientProvider>
  );
}
