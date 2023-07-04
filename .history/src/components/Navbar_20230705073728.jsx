import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsKeyboardFill } from "react-icons/bs";
import { GoX } from "react-icons/go";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Navbar() {
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const { keyword } = useParams();
  console.log(keyword);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [focusOn, setFocusOn] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchKeyword = (e) => {
    e.preventDefault();

    navigate(`/videos/${text}`);
  };

  const handleClickDeleteText = (e) => {
    e.preventDefault();

    setText("");
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
            darkMode ? "text-[white]" : "text-[#3f241b]"
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
          className="w-6/12 h-full flex items-center relative"
          onSubmit={handleSearchKeyword}
        >
          <input
            className={`${
              focusOn
                ? "w-[94%] px-9 border-[#3d39b2] placeholder:text-[#3d39b2]"
                : darkMode && !focusOn
                ? "border-[white] w-[86%] px-3 placeholder:text-[#fbf9f8ae] text-[#ffffff]"
                : "w-[86%] px-3 border-[#7b5b51] placeholder:text-[#845648] text-[#41261e]"
            }  h-[50px] py-3 box-border rounded-l-full bg-transparent border-[2px] border-solid outline-none`}
            type="text"
            value={text}
            onChange={handleTextChange}
            onFocus={() => {
              setFocusOn(true);
            }}
            onBlur={() => {
              setFocusOn(false);
            }}
            placeholder="검색"
          />
          <div
            className={`${
              focusOn ? "opacity-100" : "opacity-0"
            } absolute top-[50%] mt-[-11px] left-3 text-[1.4rem] text-[#3d39b2] transition-all duration-700`}
          >
            <CiSearch />
          </div>
          <div
            className={`${
              text.length > 0 && focusOn
                ? "right-[16%]"
                : text.length > 0 && focusOn === false
                ? "right-[19%]"
                : text.length <= 0 && focusOn
                ? "right-[16.2%]"
                : "right-[16%]"
            } absolute top-[50%] mt-[-11px] text-[1.4rem] text-[#7b5b51]`}
          >
            <BsKeyboardFill />
          </div>
          <button
            type="button"
            onClick={handleClickDeleteText}
            className={`${
              text.length > 0 && focusOn
                ? "opacity-100 right-[12%]"
                : text.length > 0 && focusOn === false
                ? "opacity-100 right-[15%]"
                : "opacity-0 right-[18%]"
            }
            } absolute top-[50%] mt-[-11px] text-[1.4rem] text-[#7b5b51] transition-all duration-700`}
          >
            <GoX />
          </button>
          <button
            type="submit"
            className={`${
              darkMode
                ? "border-[white] bg-[white] text-[#1f1e1e]"
                : "border-[#7b5b51] bg-[#3f241b] text-white"
            } w-[10%] h-[50px] py-3 rounded-r-full border-r-[2px] border-y-[2px] border-solid text-[1.4rem] flex items-center justify-center`}
          >
            <CiSearch />
          </button>
        </form>

        {/* darkMode button */}
        <button
          className={`${
            darkMode
              ? "bg-[#ffffff] text-[#1f1e1e]"
              : "bg-[#3f241b] text-[#d0ac88]"
          } w-[50px] h-[50px] rounded-full text-[1.2rem] flex justify-center items-center`}
          onClick={toggleDarkMode}
        >
          {darkMode && <MdOutlineLightMode />}
          {!darkMode && <MdOutlineNightlight />}
        </button>
      </div>
    </div>
  );
}
