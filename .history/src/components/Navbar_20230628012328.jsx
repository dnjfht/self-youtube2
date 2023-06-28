import React, { useState } from "react";

export default function Navbar() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={handleTextChange} />
        <button type="button">검색</button>
      </form>
    </div>
  );
}
