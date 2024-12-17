import { ProjectData } from "@/app/projects/page";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
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
}

const project: React.FC<ProjectProps> = ({ data }) => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmood);
  return (
    <div
      // key={data?.id}
      className={` border ${
        isDarkmode
          ? "shadow-lg border-purple-900 hover:bg-slate-950 bg-slate-900 shadow-slate-900"
          : "shadow-xl border-purple-200 hover:bg-slate-100 bg-white"
      } hover:shadow-none p-4  rounded-xl`}
    >
      <div className={`w-[full]`}>
        <img
          src={data?.project_image[0]}
          alt="aliet"
          className={`w-full rounded-t-lg `}
        />
      </div>
      <div className="w-full">
        <Link href={`/projects/${data?.project_name}`} className="inline-block">
          <h2 className="font-bold flex text-xl text-purple-600 my-2 hover:underline">
            {data?.project_name}
          </h2>
        </Link>
        {/* <p className="h-full truncate"> */}
        <p className="w-full truncate ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          magnam fuga eum voluptates nobis, dolor assumenda vero at perferendis,
          illum earum non!
          {/* {data?.project_info} */}
        </p>
      </div>
      <div className="w-full flex justify-between mt-2">
        <a
          href={data?.github_link}
          target="_blank"
          className={`bg-slate-700 hover:bg-slate-800 text-white px-2 py-1 rounded flex items-center gap-x-1 `}
        >
          <FaGithub />
          Code
        </a>
        <Link
          href={`/projects/${data?.project_name}`}
          className={`text-purple-600 hover:text-purple-800 py-1 hover:underline hover:font-semibold`}
        >
          More Details
        </Link>
        <a
          href={data?.live_link}
          target="_blank"
          className={`bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded flex items-center gap-x-1 `}
        >
          <FiExternalLink />
          Live Link
        </a>
      </div>
    </div>
  );
};

export default project;