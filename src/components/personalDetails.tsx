"use client";

import React, { useEffect, useState } from "react";
// import Typewriter from "typewriter-effect";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiPhoneFill, RiUserFill } from "react-icons/ri";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoArrowBackOutline, IoHome } from "react-icons/io5";
import aboutDB from "../app/database/AboutDB.json";
import ProfilePicture from "./profilePicture";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
const AgeCalculator = dynamic(() => import("./ageCalculator"), {
  ssr: false,
});
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
  all_pictures: string[];
}
let profile_pic: string | object = aboutDB?.profile_pic;
const PersonalDetails = () => {
  const [aboutData, setAboutData] = useState<AboutDb | null>(null);
  const [jobRole, setJobRole] = useState<string[] | undefined>(undefined);
  const [isCalendar, setIsCalendar] = useState(true);

  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  const currentDate = new Date();
  const birthDate = new Date(2000, 9, 8); // year month day 2000 10-1 08

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    ageDays += prevMonthDate.getDate();
    ageMonths--;
  }

  useEffect(() => {
    setAboutData(aboutDB);

    setJobRole(aboutDB?.job_role);
  }, []);

  return (
    <section
      className={`w-[80%] flex flex-col lg:flex-row items-center  gap-y-7 lg:gap-y-0 mt-0 md:mt-10 py-6 ${
        isDarkmode ? "text-white" : "text-black"
      }`}
    >
      <div className={`w-full lg:w-[70%] flex flex-col gap-y-4 `}>
        <h1
          style={{ fontSize: "0.5rem" }}
          className={` md:text-8xl font-bold text-purple-700s font-aestera py-4 tracking-wider ${
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
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base `}
        >
          <div className={`flex gap-x-1`}>
            <span
              className={`font-semibold ${
                isDarkmode ? "text-purple-500" : " text-purple-700"
              } flex items-center gap-x-1`}
            >
              <FaCalendarAlt /> Date of Birth :{" "}
            </span>

            {/* <input
              type="date"
              name="dob"
              id="dob"
              defaultValue={"2000-10-08"}
              className={`hover:underline ${
                isDarkmode ? "hover:text-purple-400" : "hover:text-purple-800"
              } cursor-pointer bg-transparent `}
            /> */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className={`flex gap-x-6 hover:underline ${
                    isDarkmode
                      ? "hover:text-purple-400"
                      : "hover:text-purple-800"
                  }`}
                >
                  08/10/2000
                </button>
              </DialogTrigger>
              <DialogContent
                className={`sm:max-w-[425px]s  ${
                  isDarkmode ? "bg-slate-800 text-white" : "bg-white text-black"
                }`}
              >
                <DialogHeader>
                  <DialogTitle className={`w-full flex gap-x-2 my-2 `}>
                    {isCalendar ? (
                      <>
                        {" "}
                        <LiaBirthdayCakeSolid /> 08/10/2000
                      </>
                    ) : (
                      <button
                        onClick={() => setIsCalendar(true)}
                        className={`flex items-center gap-x-2 text-purple-500 hover:text-purple-700`}
                      >
                        <IoArrowBackOutline />
                        Back
                      </button>
                    )}
                  </DialogTitle>
                  <DialogDescription
                    // className={`${isDarkmode ? "text-white" : "text-black"}`}
                    className={` w-full text-left md:text-center font-serif text-base md:text-lg ${
                      isDarkmode ? "text-purple-200" : "text-purple-700"
                    }`}
                  >
                    {/* This is my Birth Date */}
                    {isCalendar ? (
                      <>
                        Age : {ageYears} years, {ageMonths} months, and{" "}
                        {ageDays} days
                      </>
                    ) : (
                      <p className={`flex items-center justify-center gap-x-2`}>
                        <FaCalculator /> Age Calculator
                      </p>
                    )}
                  </DialogDescription>
                </DialogHeader>
                {/* <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div> */}

                {isCalendar ? (
                  <div
                    className={`w-[88%] md:w-full flex flex-col items-center justify-center`}
                  >
                    <Calendar
                      value={"08/10/2000"}
                      className={`text-black rounded-md`}
                    />
                    <button
                      onClick={() => setIsCalendar(false)}
                      className={` mt-4 flex items-center gap-x-2 shadow shadow-slate-400 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-md `}
                    >
                      <FaCalculator />
                      Calculate Your Age
                    </button>
                  </div>
                ) : (
                  <AgeCalculator />
                )}
                <DialogFooter></DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className={`flex gap-x-1`}>
            <span
              className={`font-semibold ${
                isDarkmode ? "text-purple-500" : "text-purple-700"
              } flex items-center gap-x-1`}
            >
              <IoIosMail className={`text-lg md:text-2xl`} /> Email :{" "}
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
              <RiPhoneFill className={`text-lg md:text-2xl`} /> Phone Number :{" "}
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
              <IoHome className={`text-md md:text-lg`} /> Address :{" "}
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
