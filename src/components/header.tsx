"use client";
import { setDarkMood } from "@/app/redux/slices/themeSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiClock, FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import Clock from "react-clock";
import Calendar from "react-calendar";
import "react-clock/dist/Clock.css";
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
import { useDispatch, useSelector } from "react-redux";
import { FaCalendarAlt } from "react-icons/fa";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const Header: React.FC = () => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const [date, setDate] = useState<Value>(new Date());
  const [time, setTime] = useState(new Date());
  const [isClock, setIsClock] = useState<boolean>(true);
  let timeString = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(timeString);
  const dispatch = useDispatch();

  // setInterval(() => {
  //   timeString = new Date().toLocaleTimeString();
  //   setCtime(timeString);
  // }, 1000);
  const handleDateChange = () => {
    setDate(date);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  // }, []);
  return (
    <header className="h-11 w-full flex justify-between items-center bg-purple-700 sticky z-50 top-0 left-0">
      <Link href={"/"} className="h-[60%]">
        <div className="h-full ml-3 flex gap-x-1">
          <img src={"/images/logo1-white.png"} alt="logo" className="h-full" />
          <h1 className="text-white font-bold uppercase text-lg">Jabed</h1>
        </div>
      </Link>
      {/* ===================== Clock and Calendar Start ============================= */}
      <Dialog>
        <DialogTrigger asChild>
          <div className={`flex gap-x-6`}>
            <button
              onClick={() => setIsClock(true)}
              className={`text-white font-mono hover:text-purple-200`}
            >
              {/* {ctime} */}
              {time.toLocaleTimeString()}
            </button>
            <button
              onClick={() => setIsClock(false)}
              className={`text-white font-mono hover:text-purple-200`}
            >
              {/* {ctime} */}
              {/* {time.toLocaleDateString()} */}
              {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}
            </button>
          </div>
        </DialogTrigger>
        <DialogContent
          className={`sm:max-w-[425px]s ${
            isDarkmode ? "bg-slate-800 text-white" : "bg-white text-black"
          }`}
        >
          <DialogHeader>
            <DialogTitle className={`w-full flex gap-x-2 my-2 `}>
              <button
                onClick={() => setIsClock(true)}
                className={`w-[50%]  ${
                  isDarkmode
                    ? `${isClock ? "bg-slate-900" : "bg-slate-700 "}`
                    : `${isClock ? "bg-slate-200" : "bg-slate-100 "}`
                } p-4  flex justify-center gap-x-1 my-2 `}
              >
                <FiClock />
                Clock
              </button>
              <button
                onClick={() => setIsClock(false)}
                className={`w-[50%]  ${
                  isDarkmode
                    ? `${isClock ? "bg-slate-700" : "bg-slate-900 "}`
                    : `${isClock ? "bg-slate-100" : "bg-slate-200 "}`
                } p-4  flex justify-center gap-x-1 my-2 `}
              >
                <FaCalendarAlt />
                Calendar
              </button>
            </DialogTitle>
            <DialogDescription
              // className={`${isDarkmode ? "text-white" : "text-black"}`}
              className={`w-full text-center font-serif text-lg ${
                isDarkmode ? "text-purple-200" : "text-purple-700"
              }`}
            >
              {isClock
                ? "Check the time on the clock."
                : "Check the date on the calendar."}
            </DialogDescription>
          </DialogHeader>
          {/* <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div> */}
          {isClock ? (
            <div className={`w-full flex flex-col items-center justify-center`}>
              <Clock
                value={time}
                size={300}
                renderNumbers={true}
                className={`border-4 ${
                  isDarkmode
                    ? " border-purple-500 bg-purple-100 text-purple-600"
                    : " border-purple-600 text-purple-600"
                } rounded-full`}
              />
              <div
                className={`my-4 border shadow-md ${
                  isDarkmode ? "shadow-slate-900" : "shadow-slate-400"
                }  border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white  cursor-pointer font-semibold font-mono px-4 py-2 rounded-md`}
              >
                {/* {ctime} */}
                {time.toLocaleTimeString()}
              </div>
            </div>
          ) : (
            <div className={`w-full flex flex-col items-center justify-center`}>
              <Calendar
                onChange={handleDateChange}
                value={date}
                className={`text-black rounded-md`}
              />
            </div>
          )}

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
      {/* ==================== Clock and Calendar End ======================= */}
      <ul
        className={`w-[30%] flex justify-evenly items-center text-white px-6`}
      >
        <li>
          <Link href={"/"} className={`hover:font-semibold`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className={`hover:font-semibold`}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/projects"} className={`hover:font-semibold`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className={`hover:font-semibold`}>
            Contact
          </Link>
        </li>
        <li className={`border-l-2 border-slate-300 px-4`}>
          <button className={`flex`} onClick={() => dispatch(setDarkMood())}>
            {isDarkmode ? (
              <FiSun className=" hover:scale-125" />
            ) : (
              <RiMoonClearLine className=" hover:scale-125" />
            )}
          </button>
        </li>
      </ul>
      {/* <button
        className={`flex border-l-2 border-slate-100 text-white px-4`}
        onClick={() => dispatch(setDarkMood())}
      >
        {isDarkmode ? (
          <FiSun className=" hover:text-lg" />
        ) : (
          <RiMoonClearLine className=" hover:text-lg" />
        )}
      </button> */}
    </header>
  );
};

export default Header;
