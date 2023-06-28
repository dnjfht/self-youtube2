import React from "react";
import Navbar from "../components/Navbar";
import { Outer } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outer />
    </div>
  );
}
