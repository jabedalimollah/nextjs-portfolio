"use client";
import { useEffect, useState } from "react";
import homeDB from "./database/HomeDB.json";
import Typewriter from "typewriter-effect";
// import Robot from "../../public/images/animation_picture/home.json";
// import AnimatedPicture from "@/components/animatedPicture";

import { AiFillInstagram } from "react-icons/ai";
import { FaCode, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { PiMonitorBold } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import HomePagePicture from "@/components/homePagePicture";
import SkillsSlider from "@/components/skillsSlider";
import { AboutDb } from "@/components/personalDetails";
import aboutDB from "./database/AboutDB.json";
export interface HomeDB {
  text: string;
  static_text: string;
  text_group: string[];
  home_description: string;
  download_resume_text: string;
  instagram: string;
  facebook: string;
  github: string;
  linkedin: string;
  youtube: string;
  x: string;
}

export default function Home() {
  const [homeData, setHomeData] = useState<HomeDB | null>(null);
  const [aboutData, setAboutData] = useState<AboutDb | null>(null);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setHomeData(homeDB);
    setAboutData(aboutDB);
  }, []);
  return (
    <div
      className={`w-full flex flex-col items-center ${
        isDarkmode ? "bg-slate-900 lg:bg-slate-900" : "bg-white "
      }`}
    >
      <section
        className={`w-full h-auto lg:h-[100vh] flex flex-col items-center ${
          isDarkmode ? "box_gradient_dark" : "box_gradient"
        } `}
      >
        <section
          className={`w-[80%] h-auto lg:h-[80vh] flex flex-col lg:flex-row  ${
            isDarkmode ? "text-gray-400" : "text-black"
          }`}
        >
          <div
            className={`w-full lg:w-[50%] h-full lg:h-[90%] flex flex-col justify-center gap-y-2 pt-10 lg:pt-0`}
          >
            <h2
              className={`text-3xl ${
                isDarkmode ? "text-slate-400" : "text-slate-500"
              } `}
            >
              🙋‍♂️ {homeData?.text}
            </h2>
            <h1
              className={`font-bold text-xl md:text-3xl flex gap-x-1 md:gap-x-3`}
            >
              {homeData?.static_text}
              <span
                className={`${
                  isDarkmode ? "text-violet-500" : " text-violet-700"
                }`}
              >
                <Typewriter
                  options={{
                    strings: homeData?.text_group,
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
              </span>
            </h1>
            <p
              className={`w-full md:w-[80%] my-2 ${
                isDarkmode ? "text-slate-300" : "text-black bg-violet-100s"
              }`}
            >
              <span className={`text-2xl text-violet-500`}>❛❛</span>{" "}
              {homeData?.home_description}{" "}
              <span className={`text-2xl text-violet-500`}> ❜❜</span>
            </p>
            {/* <button
            className={`w-full md:w-[50%] bg-purple-700 hover:bg-purple-800 hover:scale-x-95 text-white shadow-gray-800 shadow-2xls transition-all text-lg py-1 font-semibold rounded-md`}
          >
            Hire me
          </button> */}
            <a
              href={`mailto:${aboutData?.email}`}
              target="_blank"
              className={`w-full md:w-[50%] bg-violet-700 hover:bg-violet-800 hover:scale-x-95 text-white text-center shadow-gray-800 shadow-2xls transition-all text-lg py-1 font-semibold rounded-md`}
            >
              Hire Me
            </a>
            <ul className={`flex gap-x-3 mt-6`}>
              <li className={`flex h-full`}>
                <a
                  href={homeData?.instagram}
                  target="_blank"
                  className={`${
                    isDarkmode
                      ? "bg-gray-700 text-purple-200 shadow-md shadow-gray-950"
                      : "bg-white shadow-lg shadow-slate-400 text-purple-700"
                  }  hover:bg-purple-600  hover:text-white text-xl   p-2 rounded-full`}
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className={`flex h-full`}>
                <a
                  href={homeData?.facebook}
                  target="_blank"
                  className={`${
                    isDarkmode
                      ? "bg-gray-700 text-purple-200 shadow-md shadow-gray-950"
                      : "bg-white shadow-lg shadow-slate-400 text-purple-700"
                  }  hover:bg-purple-600  hover:text-white text-xl   p-2 rounded-full`}
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className={`flex h-full`}>
                <a
                  href={homeData?.github}
                  target="_blank"
                  className={`${
                    isDarkmode
                      ? "bg-gray-700 text-purple-200 shadow-md shadow-gray-950"
                      : "bg-white shadow-lg shadow-slate-400 text-purple-700"
                  }  hover:bg-purple-600  hover:text-white text-xl   p-2 rounded-full`}
                >
                  <FaGithub />
                </a>
              </li>
              <li className={`flex h-full`}>
                <a
                  href={homeData?.linkedin}
                  target="_blank"
                  className={`${
                    isDarkmode
                      ? "bg-gray-700 text-purple-200 shadow-md shadow-gray-950"
                      : "bg-white shadow-lg shadow-slate-400 text-purple-700"
                  }  hover:bg-purple-600  hover:text-white text-xl   p-2 rounded-full`}
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className={`flex h-full`}>
                <a
                  href={homeData?.youtube}
                  target="_blank"
                  className={`${
                    isDarkmode
                      ? "bg-gray-700 text-purple-200 shadow-md shadow-gray-950"
                      : "bg-white shadow-lg shadow-slate-400 text-purple-700"
                  }  hover:bg-purple-600  hover:text-white text-xl   p-2 rounded-full`}
                >
                  <IoLogoYoutube />
                </a>
              </li>
              <li className={`flex h-full`}>
                <a
                  href={homeData?.x}
                  target="_blank"
                  className={`${
                    isDarkmode
                      ? "bg-gray-700 text-purple-200 shadow-md shadow-gray-950"
                      : "bg-white shadow-lg shadow-slate-400 text-purple-700"
                  }  hover:bg-purple-600  hover:text-white text-xl   p-2 rounded-full`}
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`w-full lg:w-[50%] h-[100%] flex justify-center items-center`}
          >
            {/* <AnimatedPicture pathString={Robot} /> */}
            <HomePagePicture />
          </div>
        </section>
      </section>

      {/* =============================== What I Do =============================== */}
      <section
        className={`w-[100%] flex flex-col gap-y-8 items-center py-8 ${
          isDarkmode ? "bg-slate-950 lg:bg-slate-950" : "bg-gray-100"
        }`}
      >
        <h2
          className={`text-3xl uppercase flex flex-col items-center ${
            isDarkmode ? "text-gray-500" : "text-black"
          }`}
        >
          <span>
            {" "}
            What <span className={`text-purple-700`}>I Do</span>
          </span>
          <hr className={`w-[80%] border-b-2 my-2 border-purple-700`} />
        </h2>

        <div
          className={`w-full flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-evenly gap-y-5 lg:gap-y-0`}
        >
          <div
            className={`w-[80%] lg:w-[25%] flex flex-col gap-y-4 p-6 items-center borders border-purple-700 ${
              isDarkmode ? "bg-slate-900" : "bg-white"
            }  shadow-slate-600 rounded-md shadow-2xls hover:scale-105 transition duration-700 ease-in-out`}
          >
            <span
              className={`text-6xl bg-purple-700 text-white p-14  rounded-full hover:rotate-360 duration-700 transition-all`}
            >
              <PiMonitorBold />
            </span>
            <h3
              className={`uppercase text-lg ${
                isDarkmode ? "text-violet-400" : "text-violet-600"
              } `}
            >
              Design
            </h3>
            <p
              className={`w-full text-center font-thin font-serif text-slate-500`}
            >
              Design isn't just what a product looks like and feels like on the
              outside. Design encompasses the internal functionality of a
              product as well as the overall user experience. I strive to design
              interfaces and experiences that people can enjoy on all digital
              mediums.
            </p>
          </div>
          <div
            className={`w-[80%] lg:w-[25%] flex flex-col gap-y-4 p-6 items-center borders border-purple-700 ${
              isDarkmode ? "bg-slate-900" : "bg-white"
            }  shadow-slate-600 rounded-md shadow-2xls hover:scale-105 transition duration-700 ease-in-out`}
          >
            <span
              className={`text-6xl bg-purple-700 text-white p-14  rounded-full hover:rotate-360 duration-700 transition-all`}
            >
              <FaCode />
            </span>
            <h3
              className={`uppercase text-lg ${
                isDarkmode ? "text-violet-400" : "text-violet-600"
              } `}
            >
              Development
            </h3>
            <p
              className={`w-full text-center font-thin font-serif text-slate-500`}
            >
              With a strong foundation in computer science, I'm passionate about
              web design and development, and interested in mobile app
              development. As I grow as a developer, I hope to write clean,
              readable code that can be used by others and leveraged to create
              beautiful software.
            </p>
          </div>
          <div
            className={`w-[80%] lg:w-[25%] flex flex-col gap-y-4 p-6 items-center borders border-purple-700 ${
              isDarkmode ? "bg-slate-900" : "bg-white"
            }  shadow-slate-600 rounded-md shadow-2xls hover:scale-105 transition duration-700 ease-in-out`}
          >
            <span
              className={`text-6xl bg-purple-700 text-white p-14  rounded-full hover:rotate-360 duration-700 transition-all`}
            >
              <RiSettings5Fill />
            </span>
            <h3
              className={`uppercase text-lg ${
                isDarkmode ? "text-violet-400" : "text-violet-600"
              } `}
            >
              Improvement
            </h3>
            <p
              className={`w-full text-center font-thin font-serif text-slate-500`}
            >
              I enhance my web development skills daily by learning new
              technologies, mastering frameworks, and exploring trends. My focus
              is on creating innovative solutions and delivering exceptional
              user experiences through continuous learning and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* =============================== Tools & Technologies [ Skills ] ============================== */}
      <section
        className={`w-[100%] flex flex-col gap-y-8 items-center py-8 ${
          isDarkmode ? "text-gray-400" : "text-black"
        }`}
      >
        <SkillsSlider />
      </section>
    </div>
  );
}
