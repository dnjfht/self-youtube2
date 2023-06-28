import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export default function Navbar() {
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const { keyword } = useParams();
  console.log(keyword);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchKeyword = (e) => {
    e.preventDefault();

    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    if (keyword) {
      setText(keyword);
    } else if (keyword === undefined) {
      setText("");
    }
  }, [keyword]);

  return (
    <div className="w-full h-[100px] bg-red-500">
      <div className="w-10/12 h-[100%] mx-auto flex items-center justify-between">
        {/*youtube logo*/}
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillYoutube />
          <ImYoutube2 />
        </div>

        {/* 검색창 input */}
        <form onSubmit={handleSearchKeyword}>
          <input type="text" value={text} onChange={handleTextChange} />
          <button>검색</button>
        </form>

        {/* darkMode button */}
        <div>
          <MdOutlineLightMode />
          <MdOutlineNightMode />
        </div>
      </div>
    </div>
  );
}
