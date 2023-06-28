import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}
