"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
export function ModeToggle() {
  const [Mode, setMode] = useState("light");
  const { setTheme } = useTheme();

  const Handletoggle = () => {
    if (Mode == "light") {
      setTheme("dark");
      setMode("dark");
    } else {
      setTheme("light");
      setMode("light");
    }
  };

  return (
    <button onClick={Handletoggle} className={`w-16 h-8 rounded-full  px-1  ${Mode === "light" ? "bg-gray-400 flex items-center" : "bg-white flex items-center justify-end"}`}>
      <BsMoonStars size={25} className={`bg-white rounded-full p-1   ${Mode === "light" ? "text-black opacity-100 duration-500" : "opacity-0 duration-500"}`}/>
      <MdOutlineWbSunny  size={25} className={`bg-black rounded-full p-1   ${Mode === "light" ? "opacity-0 duration-500" : "text-white opacity-100 duration-500"}`}/>
    </button>
  );
}
