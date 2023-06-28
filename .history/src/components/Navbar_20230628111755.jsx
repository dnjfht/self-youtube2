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
          className="text-[3.4rem] flex items-center text-[#3f241b]"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="mr-1">
            <AiFillYoutube />
          </div>
          <div>
            <ImYoutube2 />
          </div>
        </button>

        {/* 검색창 input */}
        <form
          className="w-6/12 h-full flex items-center"
          onSubmit={handleSearchKeyword}
        >
          <input
            className="w-5/6 h-[50px] p-3 box-border rounded-l-full bg-transparent border-[2px] border-solid border-[#7b5b51]"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="검색"
          />
          <button
            type="submit"
            className="h-[50px] p-3 rounded-r-full border-[2px] border-solid border-[#7b5b51]"
          >
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
