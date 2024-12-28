"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiPhoneFill, RiUserFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import aboutDB from "../app/database/AboutDB.json";
import ProfilePicture from "./profilePicture";
import { useSelector } from "react-redux";
export interface AboutDb {
  name: string;
  job_role: string[];
  about_description: string;
  age: string;
  email: string;
  phone_number: string;
  address: string;
  location: string;
  profile_pic: string;
}
let profile_pic: string | object = aboutDB?.profile_pic;
const PersonalDetails = () => {
  const [aboutData, setAboutData] = useState<AboutDb | null>(null);
  const [jobRole, setJobRole] = useState<string[] | undefined>(undefined);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setAboutData(aboutDB);

    setJobRole(aboutDB?.job_role);
  }, []);

  return (
    <section
      className={`w-[80%] flex items-center mt-10 py-6 ${
        isDarkmode ? "text-white" : "text-black"
      }`}
    >
      <div className={`w-[70%] flex flex-col gap-y-4 `}>
        <h1
          className={`text-4xl font-bold text-purple-700s ${
            isDarkmode ? "name-dark" : "name-light"
          }`}
        >
          {aboutData?.name}
        </h1>
        <h3
          className={`flex items-center gap-x-1 font-semibold text-xl ${
            isDarkmode ? "text-purple-500" : "text-purple-700"
          }`}
        >
          <RiUserFill className="text-3xl" />
          <Typewriter
            options={{
              strings: jobRole,
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p>{aboutData?.about_description}</p>
        <div className={`grid grid-cols-2 gap-4 `}>
          <div className={`flex gap-x-1`}>
            <span
              className={`font-semibold ${
                isDarkmode ? "text-purple-500" : " text-purple-700"
              } flex items-center gap-x-1`}
            >
              <FaCalendarAlt /> Date of Birth :{" "}
            </span>

            <input
              type="date"
              name="dob"
              id="dob"
              defaultValue={"2000-10-08"}
              className={`hover:underline ${
                isDarkmode ? "hover:text-purple-400" : "hover:text-purple-800"
              } cursor-pointer bg-transparent `}
            />
          </div>
          <div className={`flex gap-x-1`}>
            <span
              className={`font-semibold ${
                isDarkmode ? "text-purple-500" : "text-purple-700"
              } flex items-center gap-x-1`}
            >
              <IoIosMail className={`text-2xl`} /> Email :{" "}
            </span>
            <a
              href={`mailto:${aboutData?.email}`}
              target="_blank"
              className={`hover:underline ${
                isDarkmode ? "hover:text-purple-400" : "hover:text-purple-800"
              }`}
            >
              {aboutData?.email}
            </a>
          </div>
          <div className={`flex gap-x-1`}>
            <span
              className={`font-semibold ${
                isDarkmode ? "text-purple-500" : "text-purple-700"
              } flex items-center gap-x-1`}
            >
              <RiPhoneFill className={`text-2xl`} /> Phone Number :{" "}
            </span>
            <span
              className={`hover:cursor-not-allowed  ${
                isDarkmode ? "hover:text-purple-400" : "hover:text-purple-800"
              }`}
            >
              {aboutData?.phone_number}
            </span>
          </div>
          <div className={`flex gap-x-1`}>
            <span
              className={`font-semibold ${
                isDarkmode ? "text-purple-500" : "text-purple-700"
              } flex items-center gap-x-1`}
            >
              <IoHome className={`text-lg`} /> Address :{" "}
            </span>
            <a
              href={`${aboutData?.location}`}
              target="_blank"
              className={`hover:underline ${
                isDarkmode ? "hover:text-purple-400" : "hover:text-purple-800"
              }`}
            >
              {aboutData?.address}
            </a>
          </div>
        </div>
      </div>
      {/* <div className={`w-[26%] flex items-center justify-center`}>
        <div className={`w-[80%] rounded-lg`}>
          <img
            src={aboutData?.profile_pic}
            alt="Jabed Ali"
            className={`w-full rounded-lg p-2 border-2 border-purple-700 shadow-md`}
          />
        </div>
      </div> */}
      <ProfilePicture profile_picture={profile_pic} />
    </section>
  );
};

export default PersonalDetails;
