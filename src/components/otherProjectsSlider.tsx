import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ProjectData } from "@/app/projects/page";
import projectsData from "../app/database/projectDB.json";
import Link from "next/link";
import { IoBriefcase } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { ImDisplay } from "react-icons/im";
import { FaDisplay } from "react-icons/fa6";
import { PiMonitorFill } from "react-icons/pi";
import { useSelector } from "react-redux";
const reverseProjectData: ProjectData[] = [...projectsData].reverse();
interface SelectedProjectName {
  selectedProjectName: string | undefined;
}

const OtherProjectsSlider: React.FC<SelectedProjectName> = ({
  selectedProjectName,
}) => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 2000 })]}
      className="w-[80%] max-w-xss"
    >
      <CarouselContent>
        {reverseProjectData?.map(
          (project, index) =>
            project?.project_name != selectedProjectName && (
              <CarouselItem key={index} className={`basis-1/3`}>
                <div
                  className={`p-3 rounded-md m-2 borders shadow-md ${
                    isDarkmode
                      ? "bg-gray-900 border-purple-700 hover:bg-slate-950"
                      : "bg-white border-purple-700 hover:bg-purple-100"
                  } `}
                >
                  <div className={`w-[100%]`}>
                    <div
                      className={`w-full h-52 bg-cover `}
                      style={{
                        backgroundImage: `url(${project?.project_image[0]})`,
                      }}
                    >
                      {/* <img
                    src={project?.project_image[0]}
                    alt={project?.project_name}
                    className={`w-full object-cover`}
                  /> */}
                    </div>
                    <div
                      className={`w-full flex justify-between items-center mb-1 mt-3`}
                    >
                      <h1
                        className={`flex items-center gap-x-1 font-semibold text-lg ${
                          isDarkmode ? "text-purple-500" : "text-purple-700"
                        }  cursor-pointer`}
                      >
                        <PiMonitorFill />

                        {project?.project_name}
                      </h1>
                      <Link
                        href={`/projects/${project?.id}`}
                        className={` px-3 py-1 shadow-mds borders bg-whites border-purple-700 text-purple-500 hover:underline hover:bg-purple-700s hover:text-purple-700 rounded-mds`}
                      >
                        More Details...
                      </Link>
                    </div>
                    {/* <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div> */}
                  </div>
                </div>
              </CarouselItem>
            )
        )}
      </CarouselContent>
      <CarouselPrevious
        className={`${
          isDarkmode ? "bg-slate-900 border-none  text-white" : "bg-white"
        }`}
      />
      <CarouselNext
        className={`${
          isDarkmode ? "bg-slate-900 border-none  text-white" : "bg-white"
        }`}
      />
    </Carousel>
  );
};

export default OtherProjectsSlider;
