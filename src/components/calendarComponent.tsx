"use client";
import React, { useEffect, useState } from "react";

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
import Style from "../styles/homePagePicture.module.css";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { Value } from "./header";
import { IoCalendar } from "react-icons/io5";
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
const CalendarComponent = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [date, setDate] = useState<Value>(new Date());
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setMonth(new Date().getMonth());
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`absolute right-24 bottom-28  z-10 border-t-8 ${
            isDarkmode
              ? "border-white bg-purple-500"
              : "border-black bg-purple-600"
          }  text-white font-semibold rounded-md p-2 hover:p-3 transition-all ${
            Style.homePage_calendar_animation
          }`}
        >
          {/* Jan */}
          {months[month]}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p
              className={`w-full flex items-center gap-x-1 text-lg tracking-wide font-semibold text-purple-600`}
            >
              <IoCalendar />
              Calendar
            </p>
          </DialogTitle>
          <DialogDescription>Check the date on the calendar.</DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div> */}
        <div className={`w-full flex items-center justify-center`}>
          <Calendar
            // onChange={handleDateChange}
            value={date}
            className={`text-black rounded-md`}
          />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarComponent;
