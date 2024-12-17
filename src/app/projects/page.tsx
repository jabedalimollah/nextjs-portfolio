"use client";
import React, { useEffect, useState } from "react";
import projectsData from "../database/projectDB.json";
import Link from "next/link";
import Project from "@/components/project";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
export interface ProjectData {
  id: number;
  project_name: string;
  project_image: string[];
  live_link: string;
  github_link: string;
  project_info: string;
  tech_stack: string[];
}
const reverseProjectData: ProjectData[] = projectsData.reverse();
const skils = [
  {
    name: "MERN",
  },
  {
    name: "React JS",
  },
  {
    name: "Next JS",
  },
  {
    name: "Javascript",
  },
  {
    name: "HTML + CSS",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Bootstrap",
  },
];
const page: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const isDarkmode = useSelector((state: any) => state.theme.darkmood);
  // const projectData: ProjectData[] = reverseProjectData;

  const handleSearchInput = (value: string): void => {
    setSearchInput(value);
    const searchData = reverseProjectData.filter((item) => {
      return !(
        item.project_name.toLowerCase().indexOf(value.toLowerCase()) === -1
      );
    });
    setProjectData(searchData);
  };
  const handleCancelBtn = (): void => {
    setSearchInput("");
    setProjectData(reverseProjectData);
  };
  useEffect(() => {
    setProjectData(reverseProjectData);
  }, []);
  return (
    <div
      className={`w-full  ${
        isDarkmode ? "bg-slate-800 text-purple-200" : "bg-purple-50 text-black"
      }`}
    >
      <section
        className={`w-full flex flex-col items-center ${
          isDarkmode ? "bg-slate-950" : " bg-purple-200"
        }`}
      >
        <p className={`mt-4`}>Some of my recent work</p>
        <h1
          className={`text-4xl font-bold mb-4 ${
            isDarkmode ? "text-purple-200" : "text-slate-800"
          } flex flex-col items-center `}
        >
          <p>
            My <span className="text-purple-700">Projects</span>
          </p>
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
        </h1>
      </section>
      {/* <section className="w-full my-4s sticky top-11 z-10 bg-purple-50 py-4"> */}
      <section
        className={`w-full py-4 ${
          isDarkmode ? "bg-slate-900" : " bg-purple-100"
        }`}
      >
        <div className="w-full flex justify-center mb-4">
          <div className={`w-full flex justify-center`}>
            <div
              className={`w-[20%] flex ${
                isDarkmode ? "shadow-md shadow-black" : "shadow-md"
              }`}
            >
              <input
                type="text"
                name="search"
                id="search"
                value={searchInput}
                onChange={(e) => handleSearchInput(e.target.value)}
                // onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search"
                className={`border flex-1 ${
                  isDarkmode
                    ? "border-purple-500 text-purple-500"
                    : "border-purple-700  text-purple-700"
                } rounded-s-md outline-none px-3 py-2 font-normal bg-transparent `}
              />
              {searchInput ? (
                <button
                  className={`${
                    isDarkmode ? "bg-purple-500" : "bg-purple-700"
                  } text-white rounded-r-md`}
                  onClick={handleCancelBtn}
                >
                  <AiOutlineClose className="text-xl m-2 " />
                </button>
              ) : (
                <button className={`bg-purple-700 text-white rounded-r-md`}>
                  <CiSearch className="text-xl m-2 " />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center gap-x-2 ">
          {skils.map((item, index) => (
            <button
              key={index}
              className={`border-2 ${
                isDarkmode
                  ? "border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 shadow-black"
                  : "border-purple-700 bg-white hover:bg-purple-700 hover:text-white text-purple-700"
              } px-2 py-1  rounded  shadow-md`}
            >
              {/* MERN */}
              {item?.name}
            </button>
          ))}
          {/* <button
            className={`border-2 border-purple-700 px-2 py-1 hover:bg-purple-700 hover:text-white rounded`}
          >
            MERN
          </button>
          <button
            className={`border-2 border-purple-700 px-2 py-1 hover:bg-purple-700 hover:text-white rounded`}
          >
            React JS
          </button>
          <button
            className={`border-2 border-purple-700 px-2 py-1 hover:bg-purple-700 hover:text-white rounded`}
          >
            Next JS
          </button>
          <button
            className={`border-2 border-purple-700 px-2 py-1 hover:bg-purple-700 hover:text-white rounded`}
          >
            Javascript
          </button>
          <button
            className={`border-2 border-purple-700 px-2 py-1 hover:bg-purple-700 hover:text-white rounded`}
          >
            Tailwind CSS
          </button>
          <button
            className={`border-2 border-purple-700 px-2 py-1 hover:bg-purple-700 hover:text-white rounded`}
          >
            Bootstrap
          </button> */}
        </div>
      </section>
      {/* <section className="w-full flex justify-center flex-wrap"> */}
      <section className="w-full flex justify-center py-6">
        <div className="w-[80%] grid grid-cols-3 gap-10 mb-10">
          {projectData.map((data, index) => (
            <Project key={data?.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
