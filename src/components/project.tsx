import { ProjectData } from "@/app/projects/page";
import { url } from "inspector";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { useSelector } from "react-redux";

// interface ProjectData {
//   id: number;
//   project_name: string;
//   project_image: string[];
//   live_button: string;
//   github: string;
//   project_info: string;
// }
interface ProjectProps {
  data: ProjectData;
  grid: number;
}

const project: React.FC<ProjectProps> = ({ data, grid }) => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  return (
    <div
      // key={data?.id}
      className={` border overflow-hidden ${
        isDarkmode
          ? "shadow-lg border-violet-900 md:border-purple-900 hover:bg-slate-950 bg-slate-900 shadow-slate-900"
          : "shadow-xl border-purple-200 hover:bg-slate-100 bg-white"
      } hover:shadow-none p-4  rounded-xl`}
    >
      <div
        className={`w-[full] ${
          grid == 2 ? "h-28" : "h-60"
        }  md:h-60 bg-cover bg-center transition-transform duration-500 transform hover:scale-105  bg-no-repeat`}
        style={{ backgroundImage: `url(${data?.project_image[0]})` }}
      >
        {/* <img
          src={data?.project_image[0]}
          alt="aliet"
          className={`w-full h-full rounded-t-lg object-cover`}
        /> */}
      </div>
      <div className="w-full">
        <Link href={`/projects/${data?.id}`} className="inline-block">
          <h2
            className={`font-bold flex items-center gap-x-1 ${
              grid == 2 ? "text-lg" : "text-xl"
            } md:text-xl text-violet-500 md:text-purple-600 my-2 hover:underline`}
          >
            {/* <MdWork className={`text-purple-400`} /> */}
            {/* 💫 */}
            <span className="loading loading-ring"></span>
            {data?.project_name}
          </h2>
        </Link>
        {/* <p className="h-full truncate"> */}
        <p className="w-full truncate ">
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          magnam fuga eum voluptates nobis, dolor assumenda vero at perferendis,
          illum earum non! */}
          {data?.project_info}
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between gap-y-2 mt-0 md:mt-2">
        <Link
          href={`/projects/${data?.id}`}
          className={`inline-block md:hidden text-violet-500 md:text-purple-600 hover:text-purple-800 py-1 hover:underline hover:font-semibold`}
        >
          More Details...
        </Link>
        <a
          href={data?.github_link}
          target="_blank"
          className={`bg-slate-700 hover:bg-slate-800 text-white px-2 py-2 lg:py-1 rounded flex items-center gap-x-1 `}
        >
          <FaGithub />
          Code
        </a>
        <Link
          href={`/projects/${data?.id}`}
          className={`hidden md:inline-block text-purple-600 hover:text-purple-800 py-1 hover:underline hover:font-semibold`}
        >
          More Details
        </Link>
        {data?.live_link ? (
          <a
            href={data?.live_link}
            target="_blank"
            className={`bg-violet-700 md:bg-purple-700 hover:bg-violet-800 lg:hover:bg-purple-800 text-white px-3 py-2 lg:py-1 rounded flex items-center gap-x-1 `}
          >
            <FiExternalLink />
            Live Link
          </a>
        ) : (
          <a
            href={data?.video_link}
            target="_blank"
            className={`bg-violet-700 md:bg-purple-700 hover:bg-violet-800 lg:hover:bg-purple-800 text-white px-3 py-2 lg:py-1 rounded flex items-center gap-x-1 `}
          >
            <IoLogoYoutube />
            Video
          </a>
        )}
      </div>
    </div>
  );
};

export default project;
