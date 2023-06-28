import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchKeyword = (e) => {
    e.preventDefault();

    navigate(`/videos/${text}`);
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSearchKeyword}>
        <input type="text" onChange={handleTextChange} />
        <button type="button">검색</button>
      </form>
    </div>
  );
}
