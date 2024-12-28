"use client";
import React, { useEffect, useState } from "react";
import skillsDB from "../app/database/SkillsDB.json";

import { useSelector } from "react-redux";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export interface SkillsDb {
  id: number;
  skill_image: string;
  skill_title: string;
}
const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState<SkillsDb[] | null>(null);
  const [showHide, setShowHide] = useState<boolean>(false);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  useEffect(() => {
    setSkillsData(skillsDB);
  }, []);
  return (
    <section className={`w-full flex flex-col items-center  gap-y-6 my-6`}>
      <div className={`flex flex-col items-center`}>
        <h1
          onClick={() => setShowHide(!showHide)}
          className={`flex items-center gap-x-2 text-4xl border-b-4s border-purple-500 my-3 font-bold cursor-pointer ${
            isDarkmode ? "text-purple-500" : "text-purple-700"
          }`}
        >
          <span className={`${isDarkmode ? "text-white" : "text-black"}`}>
            My
          </span>
          Skills {/* <button className={` rounded-full hover:bg-slate-200`}> */}
          {showHide ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          {/* </button> */}
        </h1>
        <div
          className={`slide-line ${
            isDarkmode ? "slide-line-dark" : "slide-line-light"
          }`}
        ></div>
        <div
          className={`slide-line2 ${
            isDarkmode ? "slide-line-dark" : "slide-line-light"
          }`}
        ></div>
      </div>
      {/* ---------------------- Skills Icons ----------------------- */}
      {!showHide && (
        <div
          className={`w-[80%] h-full grid grid-cols-6  place-items-center  gap-6 `}
        >
          {skillsData?.map((item, index) => (
            <div
              key={index}
              className={`w-[80%] h-full py-4  rounded-xl ${
                isDarkmode
                  ? "bg-slate-700 hover:bg-slate-900 text-white"
                  : "bg-white text-black border"
              } shadow-lg hover:shadow-none  flex flex-col items-center justify-center`}
            >
              <div className={`w-[40%] h-[70%] flex items-center`}>
                <div className={`w-[100%]`}>
                  <img
                    src={`${item.skill_image}`}
                    alt={item?.skill_title}
                    className={`w-full`}
                  />
                </div>
              </div>
              <span>{item?.skill_title}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
