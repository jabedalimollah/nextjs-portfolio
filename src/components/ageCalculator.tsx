"use client";
import React, { useState } from "react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const AgeCalculator: React.FC = () => {
  const [year, setYear] = useState<string>(""); // Initialize as string for better input handling
  const [month, setMonth] = useState<string>(""); // Initialize as string for better input handling
  const [day, setDay] = useState<string>(""); // Initialize as string for better input handling
  const [age, setAge] = useState<string>("");

  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  const currentDate = new Date();

  const handleCalculateAge = () => {
    const userBirthDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );

    if (isNaN(userBirthDate.getTime())) {
      setAge("Invalid Date");
      return;
    }

    if (userBirthDate > currentDate) {
      setAge("Invalid Birth Date");
      return;
    }

    let ageYears = currentDate.getFullYear() - userBirthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - userBirthDate.getMonth();
    let ageDays = currentDate.getDate() - userBirthDate.getDate();

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

    setAge(
      `Your age is ${ageYears} Years, ${ageMonths} Months, and ${ageDays} Days`
    );
  };

  return (
    <div
      className={`w-full flex flex-col gap-y-3 ${
        isDarkmode ? "text-white" : "text-black"
      }`}
    >
      <div className={`w-full flex flex-col gap-y-2`}>
        <label htmlFor="day">Day:</label>
        <input
          id="day"
          type="number"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className={`pl-3 py-1 outline-none border border-purple-500 rounded-md ${
            isDarkmode ? "bg-slate-900" : "bg-white"
          }`}
        />
      </div>
      <div className={`w-full flex flex-col gap-y-2`}>
        <label htmlFor="month">Month:</label>
        <input
          id="month"
          type="number"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className={`pl-3 py-1 outline-none border border-purple-500 ${
            isDarkmode ? "bg-slate-900" : "bg-white"
          } rounded-md`}
        />
      </div>
      <div className={`w-full flex flex-col gap-y-2`}>
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className={`pl-3 py-1 outline-none border border-purple-500 ${
            isDarkmode ? "bg-slate-900" : "bg-white"
          } rounded-md`}
        />
      </div>
      <button
        onClick={handleCalculateAge}
        className={`bg-purple-600 py-2 hover:bg-purple-700 text-white font-semibold rounded-md`}
      >
        Calculate Age
      </button>
      <p
        className={`w-full flex justify-center items-center gap-x-2 text-purple-500`}
      >
        <LiaBirthdayCakeSolid /> {age}
      </p>
    </div>
  );
};

export default AgeCalculator;
