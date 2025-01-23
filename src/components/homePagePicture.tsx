import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import Style from "../styles/homePagePicture.module.css";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { BiSolidContact } from "react-icons/bi";
import { FcAbout, FcBriefcase, FcContacts } from "react-icons/fc";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa6";
import { setDarkMood } from "@/app/redux/slices/themeSlice";
import { RiMoonClearFill } from "react-icons/ri";
import CalendarComponent from "./calendarComponent";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const HomePagePicture = () => {
  const [time, setTime] = useState(new Date());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const dispatch = useDispatch();
  useEffect(() => {
    setMonth(new Date().getMonth());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
  return (
    <div className={`w-full flex justify-center items-center h-full `}>
      <div className={`w-full h-full flex items-center justify-center `}>
        <div
          className={`w-full h-full flex justify-center items-center  relative ${Style.homePage_picture_animation}`}
        >
          {" "}
          {/* ======================== Contact Icon ============================== */}
          <Link
            href={"/contact"}
            className={`absolute left-40 top-24 z-10 ${Style.homePage_contact_animation}`}
          >
            <img
              src="/icons/contacts.svg"
              alt="contact"
              className={`w-12 hover:w-14 transition-all `}
            />
            {/* <FcContacts className={`text-4xl text-purple-600`} /> */}
            {/* <BiSolidContact className={`text-4xl text-purple-600`} /> */}
          </Link>
          {/* ======================== Project Icon =============================== */}
          <Link
            href={"/projects"}
            className={`absolute right-24 top-52 z-10 ${Style.homePage_contact_animation}`}
          >
            {/* <FcBriefcase className={`text-4xl text-purple-600`} /> */}
            <img
              src="/icons/coding.svg"
              alt="project"
              className={`w-12 hover:w-14 transition-all `}
            />
          </Link>
          {/* ======================= About Icon ======================== */}
          <Link
            href={"/about"}
            className={`absolute right-40 top-32  z-10 ${Style.homePage_calendar_animation} `}
          >
            {/* <FcAbout className={`text-4xl text-purple-600`} /> */}
            <FaIdCard
              className={`text-5xl hover:text-6xl transition-all ${
                isDarkmode ? "text-purple-500" : "text-purple-600"
              } `}
            />
          </Link>
          {/* ====================== Calendar Icon =========================== */}
          <CalendarComponent />
          {/* <button
            className={`absolute right-24 bottom-28  z-10 border-t-8 ${
              isDarkmode
                ? "border-white bg-purple-500"
                : "border-black bg-purple-600"
            }  text-white font-semibold rounded-md p-2 hover:p-3 transition-all ${
              Style.homePage_calendar_animation
            }`}
          >
           
            {months[month]}
          </button> */}
          {/* ====================== Sun and Moon Icon =========================== */}
          <button
            onClick={() => dispatch(setDarkMood())}
            className={`absolute left-32 top-52 z-10 text-4xl hover:text-5xl transition-all  ${Style.homePage_contact_animation}`}
          >
            {isDarkmode ? (
              <MdWbSunny className={`text-yellow-400 hover:text-yellow-500`} />
            ) : (
              <RiMoonClearFill
                className={`text-slate-400 hover:text-purple-500`}
              />
            )}
          </button>
          {/* ======================= Yoga Image =========================== */}
          <img
            src="/images/yoga.png"
            alt="yoga"
            className={`w-[70%] absolute drop-shadow-customs `}
          />
          {/* ======================= Clock ======================== */}
          <Clock
            value={time}
            // size={300}
            // size={200}
            renderNumbers={true}
            className={`border-8 absolute z-10 top-14 ${
              Style.homePage_clock_animation
            } ${
              isDarkmode
                ? " border-purple-500 bg-purple-100 text-purple-600"
                : " border-purple-600 text-purple-600 bg-purple-100"
            } rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePagePicture;
