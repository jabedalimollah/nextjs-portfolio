"use client";
import React, { useEffect, useRef, useState } from "react";
import projectsData from "../database/projectDB.json";
import Link from "next/link";
import Project from "@/components/project";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
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

const reverseProjectData: ProjectData[] = [...projectsData].reverse();

const skils = [
  "MERN",
  "React JS",
  "Next JS",
  "Javascript",
  "HTML + CSS",
  "Tailwind CSS",
  "Bootstrap",
];

const Page: React.FC = () => {
  // ============= States =============
  const [searchInput, setSearchInput] = useState<string>("");
  const [projectData, setProjectData] =
    useState<ProjectData[]>(reverseProjectData);
  const [open, setOpen] = useState<boolean>(false);
  const [menuOption, setMenuOption] = useState<number>(1);
  const [grid, setGrid] = useState<number>(3);
  const isDarkmode = useSelector((state: any) => state.theme.darkmood);
  // =============== Ref ==============
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // ============== Search input ===============
  const handleSearchInput = (value: string): void => {
    setSearchInput(value);
    const searchData = reverseProjectData.filter((item) =>
      item.project_name.toLowerCase().includes(value.toLowerCase())
    );
    setProjectData(searchData);
  };

  // =================== Search Cancel Button ===============
  const handleCancelBtn = (): void => {
    setSearchInput("");
    setProjectData(reverseProjectData);
  };

  // =============== Handle ClickOutside for Sort and Grid Menu ===========
  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      btnRef.current &&
      !btnRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  // ============= Select Grid Button ============
  const gridHandler = (option: number): void => {
    setOpen(false);
    setGrid(option);
  };

  // ================= Projects Sort Function =============
  const projectsSortHandler = (option: string): void => {
    setOpen(false);
    if (option === "recent") {
      const recentProjects: ProjectData[] = [...projectsData].reverse();
      setProjectData(recentProjects);
    } else if (option === "old") {
      const oldProjects: ProjectData[] = [...projectsData];
      setProjectData(oldProjects);
    }
  };
  // =============== useEffect ==============
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        isDarkmode ? "bg-slate-800 text-purple-200" : "bg-purple-50 text-black"
      }`}
    >
      {/*===================== Project Title Section ================ */}
      <section
        className={`w-full flex flex-col items-center ${
          isDarkmode ? "bg-slate-950" : "bg-purple-200"
        }`}
      >
        <p className="mt-4">Some of my recent work</p>
        <h1
          className={`text-4xl font-bold mb-4 ${
            isDarkmode ? "text-purple-200" : "text-slate-800"
          } flex flex-col items-center`}
        >
          <p>
            My <span className="text-purple-700">Projects</span>
          </p>
          <div
            className={`slide-line ${
              isDarkmode ? "slide-line-dark" : "slide-line-light"
            }`}
          ></div>
        </h1>
      </section>
      {/* ==================== Search, Grid and Sorting Sectiion =================- */}
      <section
        className={`w-full py-4 ${
          isDarkmode ? "bg-slate-900" : "bg-purple-100"
        }`}
      >
        <div className="w-full flex justify-center mb-4">
          <div className="w-full flex justify-center gap-x-1">
            {/* -------------------- Search Box -------------------- */}
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
                placeholder="Search"
                className={`border flex-1 ${
                  isDarkmode
                    ? "border-purple-500 text-purple-500"
                    : "border-purple-700 text-purple-700"
                } rounded-s-md outline-none px-3 py-2 font-normal bg-transparent`}
              />
              {searchInput ? (
                <button
                  className={`${
                    isDarkmode
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-purple-700 hover:bg-purple-800"
                  } text-white rounded-r-md`}
                  onClick={handleCancelBtn}
                >
                  <AiOutlineClose className="text-xl m-2" />
                </button>
              ) : (
                <button className="bg-purple-700 text-white rounded-r-md">
                  <CiSearch className="text-xl m-2" />
                </button>
              )}
            </div>
            {/* ------------------ Grid and Sort Buttons ----------- */}
            <div className="flex items-center gap-x-1 relative">
              <button
                ref={btnRef}
                onClick={() => setOpen(!open)}
                className="h-full px-3 rounded-md flex items-center bg-purple-700 hover:bg-purple-800 text-white"
              >
                <BsFillGridFill />
              </button>
              {open && (
                <div
                  ref={menuRef}
                  className={`w-72 absolute top-11 right-0 md:left-1 lg:left-0 font-semibold ${
                    isDarkmode ? "bg-slate-800" : "bg-white shadow-gray-400"
                  } shadow-2xl rounded-md z-50`}
                >
                  <div className="w-full flex justify-around border-b">
                    {/* _________________ View Button _________________  */}
                    <button
                      onClick={() => setMenuOption(1)}
                      className={`w-[48%] p-2  ${
                        isDarkmode ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }  flex flex-col justify-center items-center transition-all ${
                        menuOption == 1
                          ? `border-b-4 border-purple-700 ${
                              isDarkmode ? "text-purple-500" : "text-purple-700"
                            }`
                          : "border-none"
                      }`}
                    >
                      <ImMenu />
                      View
                    </button>
                    {/* _________________ sort Button _________________  */}
                    <button
                      onClick={() => setMenuOption(2)}
                      className={`w-[48%] p-2 ${
                        isDarkmode ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      } flex flex-col justify-center items-center transition-all ${
                        menuOption == 2
                          ? `border-b-4 border-purple-700 ${
                              isDarkmode ? "text-purple-500" : "text-purple-700"
                            }`
                          : "border-none"
                      }`}
                    >
                      <MdAccessTimeFilled />
                      Sort
                    </button>
                  </div>
                  {menuOption === 1 ? (
                    <ul
                      className={`flex flex-col ${
                        isDarkmode ? "text-white" : "text-black"
                      } py-2`}
                    >
                      <li
                        className={`${
                          isDarkmode
                            ? "hover:bg-slate-700"
                            : "hover:bg-gray-100"
                        } flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
                        onClick={() => gridHandler(3)}
                      >
                        <BsFillGrid3X3GapFill /> Grid
                      </li>
                      <li
                        className={`${
                          isDarkmode
                            ? "hover:bg-slate-700"
                            : "hover:bg-gray-100"
                        } flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
                        onClick={() => gridHandler(2)}
                      >
                        <BsFillGridFill /> Large grid
                      </li>
                    </ul>
                  ) : (
                    <ul
                      className={`flex flex-col ${
                        isDarkmode ? "text-white" : "text-black"
                      } py-2`}
                    >
                      <li
                        className={`${
                          isDarkmode
                            ? "hover:bg-slate-700"
                            : "hover:bg-gray-100"
                        } flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
                        onClick={() => projectsSortHandler("recent")}
                      >
                        <MdAccessTimeFilled /> Recent Projects
                      </li>
                      <li
                        className={`${
                          isDarkmode
                            ? "hover:bg-slate-700"
                            : "hover:bg-gray-100"
                        } flex items-center gap-x-2 text-base px-4 py-2 rounded cursor-pointer`}
                        onClick={() => projectsSortHandler("old")}
                      >
                        <IoCalendarNumber /> Old Projects
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-x-2">
          {skils.map((item, index) => (
            <button
              key={index}
              className={`border-2 ${
                isDarkmode
                  ? "border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 shadow-black"
                  : "border-purple-700 bg-white hover:bg-purple-700 hover:text-white text-purple-700"
              } px-2 py-1 rounded shadow-md`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* ========================== Projects Section =================== */}
      <section className="w-full flex justify-center py-6">
        <div
          className={`w-[80%] grid ${
            grid === 3 ? "grid-cols-3" : "grid-cols-2"
          } gap-10 mb-10`}
        >
          {projectData.map((data) => (
            <Project key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
