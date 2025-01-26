"use client";
import Link from "next/link";
import React from "react";
import { BiSolidError } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

const NotFound = () => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  return (
    <div
      className={`${
        isDarkmode ? "bg-slate-800 text-white" : "bg-violet-50 text-black"
      } w-full h-[50vh] md:h-[90vh] flex justify-center items-center text-sm md:text-base`}
    >
      <div className={`flex flex-col items-center justify-center gap-y-2`}>
        <BiSolidError className={`text-6xl text-red-700`} />
        <h1
          className={`text-3xl ${
            isDarkmode ? "text-violet-500" : "text-violet-600"
          }  font-serif font-semibold`}
        >
          Page Not Found!
        </h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <Link
          href={"/"}
          className={`shadow-md shadow-violet-700 hover:bg-violet-700 bg-violet-600 text-white rounded-md py-2 px-3 flex items-center gap-x-2`}
        >
          <IoMdArrowBack /> Go Back to Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
