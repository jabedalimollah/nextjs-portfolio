"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { ProjectData } from "../page";
import projectsData from "../../database/projectDB.json";

import ProjectImagesSlider from "@/components/projectImagesSlider";
import { useSelector } from "react-redux";
import { FaBriefcase, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import OtherProjectsSlider from "@/components/otherProjectsSlider";
import { FaCircleInfo } from "react-icons/fa6";
import { FcImageFile } from "react-icons/fc";

const projectData: ProjectData[] = [...projectsData];

const Page: React.FC = () => {
  const [projectDetails, setProjectDetails] = useState<ProjectData | null>(
    null
  );
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const { id } = useParams<{ id: string }>();
  let selectedProjectName: string | undefined = projectDetails?.project_name;
  useEffect(() => {
    const data = projectData.find(
      (project: ProjectData): any => project.id === parseInt(id)
    );
    setProjectDetails(data || null);
  }, []);
  return (
    <div
      className={`w-full pb-11 ${
        isDarkmode ? "bg-slate-900 text-white" : "bg-violet-50 text-black"
      }`}
    >
      <div className={`w-full flex flex-col items-center`}>
        {/* Page {id} */}
        <h1
          className={`flex flex-col items-center text-2xl md:text-4xl border-b-4s border-violet-500 my-3 py-2 font-bold ${
            isDarkmode ? "text-violet-500" : "text-violet-700"
          }`}
        >
          {projectDetails?.project_name}
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
        {/* <div className={`w-[80%] flex`}>
          <h2
            className={`text-2xl border-b-4s border-violet-500 my-3 py-2 font-bold ${
              isDarkmode ? "text-violet-500" : "text-violet-700"
            }`}
          >
            {projectDetails?.project_name} Images
            <div
              className={`slide-line ${
                isDarkmode ? "slide-line-dark" : "slide-line-light"
              }`}
            ></div>
          </h2>
        </div>
        <ProjectImagesSlider projectDetails={projectDetails} /> */}
        <div className={`w-full flex flex-col items-center`}>
          <section className={`w-[80%] flex flex-col items-start`}>
            <h2
              className={` text-xl md:text-2xl border-b-4s border-violet-500 mt-5s py-2 font-bold ${
                isDarkmode ? "text-violet-500" : "text-violet-700"
              }`}
            >
              <span className={`flex items-center  gap-x-1 `}>
                {/* <FaCircleInfo /> */}
                {/* 💻 */}
                🖥️ Project Info
              </span>

              <div
                className={`slide-line ${
                  isDarkmode ? "slide-line-dark" : "slide-line-light"
                }`}
              ></div>
            </h2>
            <p>{projectDetails?.project_info}</p>
            {projectDetails?.features?.length != 0 && (
              <div className={`w-full`}>
                <h3
                  className={`w-full  text-xl md:text-2xl border-b-2 border-violet-500 my-2 py-2 font-bold ${
                    isDarkmode ? "text-violet-500" : "text-violet-700"
                  }`}
                >
                  🚀 Features
                </h3>

                <ul>
                  {projectDetails?.features.map((list, index) => (
                    <li key={index} className={`list-disc list-inside`}>
                      {list}.
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={`w-full`}>
              <h3
                className={`w-full  text-xl md:text-2xl border-b-2 border-violet-500 my-4 py-2 font-bold ${
                  isDarkmode ? "text-violet-500" : "text-violet-700"
                }`}
              >
                🛠️ Technologies Used
              </h3>
              <div className={`w-full flex flex-col gap-y-6 lg:gap-y-3`}>
                {projectDetails?.tech_stack?.frontend?.length != 0 && (
                  <div className={`w-full flex  items-centers gap-x-2`}>
                    <h4 className={`text-lg font-semibold`}>Frontend </h4>
                    <p className={`text-lg font-semibold`}> : </p>
                    <ul className={`flex gap-1 flex-wrap`}>
                      {projectDetails?.tech_stack?.frontend.map(
                        (skill, index) => (
                          <li
                            key={index}
                            className={`px-2 py-1 text-white bg-violet-700 hover:bg-violet-800 rounded-md`}
                          >
                            {skill}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
                {projectDetails?.tech_stack?.backend?.length != 0 && (
                  <div className={`w-full flex items-centers gap-x-2`}>
                    <h4 className={`text-lg font-semibold`}>Backend</h4>
                    <p className={`text-lg font-semibold`}> : </p>
                    <ul className={`flex gap-1 flex-wrap `}>
                      {projectDetails?.tech_stack?.backend.map(
                        (skill, index) => (
                          <li
                            key={index}
                            className={`px-2 py-1 text-white bg-violet-700 hover:bg-violet-800 rounded-md`}
                          >
                            {skill}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
                {projectDetails?.tech_stack?.database?.length != 0 && (
                  <div className={`w-full flex items-center gap-x-2`}>
                    <h4 className={`text-lg font-semibold`}>Database </h4>
                    <p className={`text-lg font-semibold`}> : </p>
                    <ul className={`flex gap-x-1 `}>
                      {projectDetails?.tech_stack?.database.map(
                        (skill, index) => (
                          <li
                            key={index}
                            className={`px-2 py-1 text-white bg-violet-700 hover:bg-violet-800 rounded-md`}
                          >
                            {skill}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className={`w-full`}>
              <h3
                className={`w-full  text-xl md:text-2xl border-b-2 border-violet-500 my-4 py-2 font-bold ${
                  isDarkmode ? "text-violet-500" : "text-violet-700"
                }`}
              >
                🔗 Links
              </h3>
              <div
                className={`w-full flex flex-col md:flex-row gap-y-2 gap-x-2`}
              >
                {projectDetails?.github_link?.length != 0 && (
                  <a
                    href={projectDetails?.github_link}
                    target="_blank"
                    className={`flex items-center gap-x-1 py-1 px-3 border md:border-2 font-semibold ${
                      isDarkmode
                        ? "border-slate-300 text-slate-300 hover:border-slate-800   hover:bg-slate-100 hover:text-black"
                        : "border-slate-800  text-slate-800 hover:bg-slate-800 hover:text-white"
                    } rounded-md`}
                  >
                    <FaGithub /> Github
                  </a>
                )}
                {projectDetails?.live_link?.length != 0 && (
                  <a
                    href={projectDetails?.live_link}
                    target="_blank"
                    className={`flex items-center gap-x-1 py-1 px-3 border md:border-2 font-semibold ${
                      isDarkmode
                        ? "border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white"
                        : "border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white"
                    } rounded-md `}
                  >
                    <FaExternalLinkAlt /> Live Link
                  </a>
                )}
                {projectDetails?.video_link?.length != 0 && (
                  <a
                    href={projectDetails?.video_link}
                    target="_blank"
                    className={`flex items-center gap-x-1 py-1 px-3 border md:border-2 font-semibold ${
                      isDarkmode
                        ? "border-red-600  text-red-600 hover:bg-red-700 hover:text-white"
                        : " border-red-700  text-red-700 hover:bg-red-700 hover:text-white"
                    } rounded-md`}
                  >
                    <BsYoutube /> Video
                  </a>
                )}
              </div>
            </div>
          </section>
          <section className={`w-full flex justify-center`}>
            <div className={`w-[80%] flex flex-col items-center`}>
              <div className={`w-[100%] flex`}>
                <h2
                  className={`text-lg md:text-2xl border-b-4s border-violet-500 my-3 py-2 font-bold ${
                    isDarkmode ? "text-violet-500" : "text-violet-700"
                  }`}
                >
                  {/* 📷 */}
                  <span className={`flex items-center gap-x-1`}>
                    <FcImageFile />
                    {projectDetails?.project_name} Images
                  </span>

                  <div
                    className={`slide-line ${
                      isDarkmode ? "slide-line-dark" : "slide-line-light"
                    }`}
                  ></div>
                </h2>
              </div>
              {projectDetails?.project_image.map((image, index) => (
                <div
                  key={index}
                  className={`w-[100%] flex justify-center borders border-violet-800 rounded-lg ${
                    isDarkmode
                      ? "border-violet-200 bg-slate-700"
                      : "border-violet-800 bg-white"
                  }  shadow-lg p-4  mb-6`}
                >
                  <img
                    src={image}
                    alt={`${projectDetails?.project_name} image`}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className={`w-full flex flex-col items-center`}>
          <div className={`w-[80%] flex justify-center`}>
            <h2
              className={`flex flex-col items-center text-2xl border-b-4s border-violet-500 my-3 py-2 font-bold ${
                isDarkmode ? "text-violet-500" : "text-violet-700"
              }`}
            >
              {/* {projectDetails?.project_name} Images */}

              <span className={`flex items-center gap-x-2`}>
                Other Projects
                {/* <FaBriefcase /> */}
              </span>
              <div
                className={`slide-line ${
                  isDarkmode ? "slide-line-dark" : "slide-line-light"
                }`}
              ></div>
            </h2>
          </div>
          {/* <ProjectImagesSlider projectDetails={projectDetails} /> */}
          <OtherProjectsSlider selectedProjectName={selectedProjectName} />
        </div>
      </div>
    </div>
  );
};

export default Page;
