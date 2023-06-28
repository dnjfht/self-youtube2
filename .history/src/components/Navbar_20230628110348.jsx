import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Navbar() {
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const { keyword } = useParams();
  console.log(keyword);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f]" : "bg-[#d0ac88]"
      } w-full h-[100px]`}
    >
      <div className="w-10/12 h-[100%] mx-auto flex items-center justify-between">
        {/*youtube logo*/}
        <button
          className="text-[3.4rem] flex items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="mr-1 text-[#bf2f2f]">
            <AiFillYoutube />
          </div>
          <ImYoutube2 />
        </button>

        {/* 검색창 input */}
        <form onSubmit={handleSearchKeyword}>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="검색"
          />
          <button type="submit">
            <CiSearch />
          </button>
        </form>

        {/* darkMode button */}
        <button onClick={toggleDarkMode}>
          {darkMode && <MdOutlineLightMode />}
          {!darkMode && <MdOutlineNightlight />}
        </button>
      </div>
    </div>
  );
}
