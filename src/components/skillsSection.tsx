"use client";
import React, { useEffect, useState } from "react";
import skillsDB from "../app/database/SkillsDB.json";

import { useSelector } from "react-redux";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { PiBracketsCurly, PiBracketsCurlyBold } from "react-icons/pi";
import { RiToolsFill } from "react-icons/ri";
// export interface SkillsDb {
//   id: number;
//   skill_image: string;
//   skill_title: string;
// }

interface Skill {
  skill_image: string;
  skill_title: string;
}

export interface SkillsDb {
  frontend: Skill[];
  backend: Skill[];
  others: Skill[];
}
const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState<SkillsDb | null>(null);
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
        <div className={`w-[80%] flex flex-col gap-y-6`}>
          <div
            className={`w-full border  p-6 rounded-md ${
              isDarkmode
                ? "bg-slate-900 border-purple-800"
                : "bg-white border-purple-400"
            } `}
          >
            <h1
              className={`text-xl flex gap-x-2 items-center text-purple-700 font-semibold my-2`}
            >
              <FaCode className={``} />
              Frontend
            </h1>
            <div className={`w-full flex flex-wrap gap-4`}>
              {skillsData?.frontend.map((skill, index) => (
                <div
                  key={index}
                  className={`h-12 p-2 flex items-center justify-center gap-x-2 border ${
                    isDarkmode
                      ? " border-slate-500 bg-slate-800 hover:bg-slate-600 text-white"
                      : " border-slate-300 bg-purple-50 hover:bg-slate-200 text-black"
                  }   rounded-md cursor-pointer shrink-0 `}
                >
                  <img
                    src={skill?.skill_image}
                    alt={skill?.skill_title}
                    className={`h-[100%]`}
                  />
                  <span>{skill?.skill_title}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full border  p-6 rounded-md ${
              isDarkmode
                ? "bg-slate-900 border-purple-800"
                : "bg-white border-purple-400"
            } `}
          >
            <h1
              className={`text-xl flex gap-x-2 items-center text-purple-700 font-semibold my-2`}
            >
              <PiBracketsCurlyBold /> Backend
            </h1>
            <div className={`w-full flex flex-wrap gap-4`}>
              {skillsData?.backend.map((skill, index) => (
                <div
                  key={index}
                  className={`h-12 p-2 flex items-center justify-center gap-x-2 border ${
                    isDarkmode
                      ? " border-slate-500 bg-slate-800 hover:bg-slate-600 text-white"
                      : " border-slate-300 bg-purple-50 hover:bg-slate-200 text-black"
                  }   rounded-md cursor-pointer shrink-0 `}
                >
                  <img
                    src={skill?.skill_image}
                    alt={skill?.skill_title}
                    className={`h-[100%]`}
                  />
                  <span>{skill?.skill_title}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full border  p-6 rounded-md ${
              isDarkmode
                ? "bg-slate-900 border-purple-800"
                : "bg-white border-purple-400"
            } `}
          >
            <h1
              className={`text-xl flex gap-x-2 items-center text-purple-700 font-semibold my-2`}
            >
              <RiToolsFill /> Others
            </h1>
            <div className={`w-full flex flex-wrap gap-4`}>
              {skillsData?.others.map((skill, index) => (
                <div
                  key={index}
                  className={`h-12 p-2 flex items-center justify-center gap-x-2 border ${
                    isDarkmode
                      ? " border-slate-500 bg-slate-800 hover:bg-slate-600 text-white"
                      : " border-slate-300 bg-purple-50 hover:bg-slate-200 text-black"
                  }   rounded-md cursor-pointer shrink-0 `}
                >
                  <img
                    src={skill?.skill_image}
                    alt={skill?.skill_title}
                    className={`h-[100%]`}
                  />
                  <span>{skill?.skill_title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* <div
            className={`w-full border border-purple-400 p-6 rounded-md bg-white shadow-inner shadow-slate-300`}
          >
            <h1 className={`text-xl text-purple-700 font-semibold my-2`}>Frontend</h1>
            <div className={`w-full grid grid-cols-3 gap-6`}>
              {skillsData?.frontend.map((skill, index) => (
                <div
                  key={index}
                  className={`w-[100%] p-2 flex flex-col items-center justify-center gap-x-2 border border-slate-200 bg-purple-50 hover:bg-slate-200 shadow-lg shadow-slate-300  rounded-md cursor-pointer shrink-0 `}
                >
                  <img
                    src={skill?.skill_image}
                    alt={skill?.skill_title}
                    className={`w-[50%]`}
                  />
                  <span>{skill?.skill_title}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full border border-purple-400 p-6 rounded-md bg-white shadow-inner shadow-slate-300`}
          >
            <h1 className={`text-xl font-semibold my-2`}>Backend</h1>
            <div className={`w-full grid grid-cols-3 gap-6`}>
              {skillsData?.backend.map((skill, index) => (
                <div
                  key={index}
                  className={`w-[100%] p-2 flex flex-col items-center justify-center gap-x-2 border border-slate-200 bg-purple-50 hover:bg-slate-200 shadow-lg shadow-slate-300  rounded-md cursor-pointer shrink-0 `}
                >
                  <img
                    src={skill?.skill_image}
                    alt={skill?.skill_title}
                    className={`w-[50%]`}
                  />
                  <span>{skill?.skill_title}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full border border-purple-400 p-6 rounded-md bg-white shadow-inner shadow-slate-300`}
          >
            <h1 className={`text-xl font-semibold my-2`}>Others</h1>
            <div className={`w-full grid grid-cols-3 gap-6`}>
              {skillsData?.others.map((skill, index) => (
                <div
                  key={index}
                  className={`w-[100%] p-2 flex flex-col items-center justify-center gap-x-2 border border-slate-200 bg-purple-50 hover:bg-slate-200 shadow-lg shadow-slate-300  rounded-md cursor-pointer shrink-0 `}
                >
                  <img
                    src={skill?.skill_image}
                    alt={skill?.skill_title}
                    className={`w-[50%]`}
                  />
                  <span>{skill?.skill_title}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
