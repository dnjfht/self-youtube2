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
        darkMode ? "bg-[#1f1e1e]" : "bg-[#d0ac88]"
      } w-full h-[100px]`}
    >
      <div className="w-10/12 h-[100%] mx-auto flex items-center justify-between">
        {/*youtube logo*/}
        <button
          className={`${
            darkMode ? "text-[#f0e6e0d8]" : "text-[#3f241b]"
          } text-[3.4rem] flex items-center`}
          onClick={() => {
            navigate("/");
          }}
        >
          <div className={`${darkMode ? "text-[#b92525]" : ""} mr-1`}>
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
            className={`${
              darkMode ? "border-[#f0e6e0d8]" : "border-[#7b5b51]"
            } w-5/6 h-[50px] p-3 box-border rounded-l-full bg-transparent border-[2px] border-solid placeholder:text-[#845648] outline-none text-[#41261e]`}
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="검색"
          />
          <button
            type="submit"
            className="h-[50px] py-3 px-6 bg-[#3f241b] rounded-r-full border-r-[2px] border-y-[2px] border-solid border-[#7b5b51] text-white text-[1.4rem] flex items-center justify-center"
          >
            <CiSearch />
          </button>
        </form>

        {/* darkMode button */}
        <button
          className="w-[50px] h-[50px] bg-[#3f241b] rounded-full text-[1.2rem] text-[#d0ac88] flex justify-center items-center"
          onClick={toggleDarkMode}
        >
          {darkMode && <MdOutlineLightMode />}
          {!darkMode && <MdOutlineNightlight />}
        </button>
      </div>
    </div>
  );
}
