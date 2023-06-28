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
      </form>
    </div>
  );
}
