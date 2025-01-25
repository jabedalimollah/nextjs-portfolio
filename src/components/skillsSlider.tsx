"use client";
import React, { useEffect, useState } from "react";
import { SkillsDb } from "./skillsSection";
import skillsDB from "../app/database/SkillsDB.json";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import { RiToolsFill } from "react-icons/ri";
const skills = [...skillsDB.frontend, ...skillsDB.backend, ...skillsDB.others];
const SkillsSlider = () => {
  const [skillsData, setSkillsData] = useState<SkillsDb | null>(null);
  const [allSkillData, setAllSkillData] = useState(skills);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setSkillsData(skillsDB);

    setAllSkillData(skills);
  }, []);
  return (
    <div className={`w-full flex flex-col items-center justify-center gap-y-7`}>
      <div className={`w-full flex flex-col items-center gap-y-1`}>
        <h2
          className={`flex flex-cols flex-row items-center gap-x-1 text-xl md:text-3xl text-purple-500 font-mono `}
        >
          <RiToolsFill /> Tools & Technologies
        </h2>
        <div
          className={`w-[55%] md:w-[35%] lg:w-[15%] h-1 border-b-2 border-purple-500`}
        ></div>
        <div
          className={`w-[40%] md:w-[25%] lg:w-[10%] h-1 border-b-2 border-purple-500`}
        ></div>
        <div
          className={`w-[20%] md:w-[15%] lg:w-[5%] h-1 border-b-2 border-purple-500`}
        ></div>
      </div>

      <div className={`w-full`}>
        <Marquee>
          {allSkillData?.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-x-1 mx-4  border ${
                isDarkmode
                  ? "border-slate-600 bg-slate-700 hover:bg-slate-900 text-white"
                  : "border-slate-200 bg-slate-100 hover:bg-slate-200 text-black"
              } py-2 px-3 rounded-full`}
            >
              <img
                src={skill?.skill_image}
                alt={skill?.skill_title}
                className={`h-6`}
              />
              <p>{skill?.skill_title}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsSlider;
