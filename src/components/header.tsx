"use client";
import { setDarkMood } from "@/app/redux/slices/themeSlice";
import Link from "next/link";
import React from "react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
const Header: React.FC = () => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const dispatch = useDispatch();
  return (
    <header className="h-11 w-full flex justify-between items-center bg-purple-700 sticky z-50 top-0 left-0">
      <Link href={"/"} className="h-[60%]">
        <div className="h-full ml-3 flex gap-x-1">
          <img src={"/images/logo1-white.png"} alt="logo" className="h-full" />
          <h1 className="text-white font-bold uppercase text-lg">Jabed</h1>
        </div>
      </Link>
      <ul className={`flex gap-x-3 items-center text-white px-6`}>
        <li>
          <Link href={"/"} className={`hover:font-semibold`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className={`hover:font-semibold`}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/projects"} className={`hover:font-semibold`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className={`hover:font-semibold`}>
            Contact
          </Link>
        </li>
        <li className={``}>
          <button className={`flex`} onClick={() => dispatch(setDarkMood())}>
            {isDarkmode ? (
              <FiSun className=" hover:text-lg" />
            ) : (
              <RiMoonClearLine className=" hover:text-lg" />
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
