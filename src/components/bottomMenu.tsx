"use client";
import { setDarkMood } from "@/app/redux/slices/themeSlice";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import {
  RiContactsBook3Fill,
  RiMoonClearFill,
  RiSunFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const BottomMenu = () => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const dispatch = useDispatch();
  return (
    <nav
      style={{ zIndex: 99999 }}
      className={`inline-block lg:hidden w-full fixed bottom-0 left-0 `}
    >
      <ul
        className={`w-full flex justify-around items-center border border-violet-100 text-white bg-violet-600  py-3 text-xl rounded-t-3xl relative`}
      >
        <li className="">
          <Link href={"/"} className={`hover:text-violet-200`}>
            <AiFillHome />
          </Link>
        </li>
        <li className={`hover:text-violet-200`}>
          <Link href={"/about"} className={` `}>
            <FaUserAlt />
          </Link>
        </li>
        <li className={`relative`}>
          <button
            onClick={() => dispatch(setDarkMood())}
            className={`absolute -bottom-3 -right-7 z-50s border border-violet-100 bg-violet-800 p-5 rounded-full`}
          >
            {/* <LuMoonStar /> */}
            {isDarkmode ? <RiSunFill /> : <RiMoonClearFill />}
          </button>
        </li>
        <li className={`hover:text-violet-200`}>
          <Link href={"/projects"} className={` `}>
            <BsBriefcaseFill />
          </Link>
        </li>
        <li className={`hover:text-violet-200`}>
          <Link href={"/contact"} className={` `}>
            <RiContactsBook3Fill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;
