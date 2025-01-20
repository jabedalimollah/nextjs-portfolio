import React, { useEffect, useState } from "react";
import { IoCalendar, IoCalendarOutline } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "./header";
import { MdOutlineCalculate } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiCalculator2 } from "react-icons/ci";
import { useSelector } from "react-redux";

const months = [
  "Month",
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

const CalendarAndAgeCalculator = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [day, setDay] = useState<number>(new Date().getDate());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [ageYear, setAgeYear] = useState<string>(""); // Initialize as string for better input handling
  const [ageMonth, setAgeMonth] = useState<string>("0"); // Initialize as string for better input handling
  const [ageDay, setAgeDay] = useState<string>(""); // Initialize as string for better input handling
  const [age, setAge] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(true);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const handleDateChange = () => {
    setDate(date);
  };
  console.log(new Date().getMonth());
  const currentDate = new Date();
  const handleCalculateAge = () => {
    const userBirthDate = new Date(
      parseInt(ageYear),
      // parseInt(ageMonth),
      parseInt(ageMonth) - 1,
      parseInt(ageDay)
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
  useEffect(() => {
    setDate(new Date());
    setDay(new Date().getDate());
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
  }, []);
  return (
    <section className={`w-full flex justify-center my-6`}>
      <div
        className={`w-[80%] flex rounded-md shadow-2xl ${
          isDarkmode ? "shadow-slate-900" : "shadow-slate-300"
        } `}
      >
        {/* ============ Date =============== */}
        <div
          className={`w-[50%] flex flex-col items-center justify-center text-purple-500 ${
            isDarkmode ? "bg-slate-900" : "bg-white"
          }  p-6`}
        >
          <h2 className={`flex gap-x-2 items-center text-2xl font-semibold`}>
            <IoCalendar />
            Today's Date
          </h2>
          <div className={`w-[80%]`}>
            <img
              src="/images/3d1.png"
              alt="image"
              className={`w-full drop-shadow-custom  rounded-lg`}
            />
          </div>
          <p className={`text-9xl font-serif font-semibold`}>{day}</p>
          <div className={`text-4xl flex gap-x-2`}>
            <h2 className={` font-serif font-bold`}>{months[month]},</h2>
            <p className={` font-mono font-bold`}>{year}</p>
          </div>
        </div>
        {/* ============== Calendar And Age Calculator ================== */}
        <div className={`w-[50%] flex justify-center  `}>
          {showCalendar ? (
            <>
              {/* ============ Calendar =============== */}
              <div
                className={`w-full flex flex-col items-center justify-center p-6 bg-purple-600 `}
              >
                <h2
                  className={`flex gap-x-2 items-center justify-center text-2xl font-semibold my-2 text-white `}
                >
                  <IoCalendarOutline />
                  Calendar
                  <button
                    onClick={() => setShowCalendar(false)}
                    className={`flex gap-x-2 text-xl items-center font-semibold  p-2 rounded-full bg-gradient-to-r shadow-md shadow-purple-700 hover:shadow-none text-white from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500`}
                  >
                    <IoIosArrowForward />
                  </button>
                </h2>
                <Calendar
                  // onChange={handleDateChange}
                  value={date}
                  className={`text-purple-600 rounded-md  p-4`}
                />

                {/* <button
              className={`flex gap-x-2 items-center font-semibold px-3 py-2 rounded-md mt-4 bg-gradient-to-r shadow-md shadow-purple-800 hover:shadow-none text-white from-purple-500 to-pink-500`}
            >
              <MdOutlineCalculate />
          
              Calculate Your Age
            </button> */}
              </div>
            </>
          ) : (
            <>
              {/* ============ Age Calculator =============== */}
              <div
                className={`w-full flex flex-col items-center justify-center p-6 bg-purple-600 `}
              >
                <h2
                  className={`flex gap-x-2 items-center justify-center text-2xl font-semibold my-2 text-white `}
                >
                  {" "}
                  <button
                    onClick={() => setShowCalendar(true)}
                    className={`flex gap-x-2 text-xl items-center font-semibold  p-2 rounded-full bg-gradient-to-r shadow-md shadow-purple-700 hover:shadow-none text-white from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500`}
                  >
                    <IoIosArrowBack />
                  </button>
                  {/* Calculate Your Age */}
                  Age Calculator
                  <FaCalculator />
                </h2>
                <div className={`w-[80%] flex flex-col gap-y-2`}>
                  <div className={` flex flex-col gap-y-1`}>
                    <label
                      htmlFor="day"
                      className={`text-lg text-white font-semibold`}
                    >
                      Day
                    </label>
                    <input
                      type="number"
                      placeholder="Day"
                      value={ageDay}
                      onChange={(e) => setAgeDay(e.target.value)}
                      className={`py-2 px-3 outline-none rounded-md`}
                    />
                  </div>
                  {/* <div className={` flex flex-col gap-y-1`}>
                    <label
                      htmlFor="month"
                      className={`text-lg text-white font-semibold`}
                    >
                      Month
                    </label>
                    <input
                      type="number"
                      placeholder="Month"
                      value={ageMonth}
                      onChange={(e) => setAgeMonth(e.target.value)}
                      className={`py-2 px-3 outline-none rounded-md`}
                    /> */}
                  <div className={` flex flex-col gap-y-1`}>
                    <label
                      htmlFor="month"
                      className={`text-lg text-white font-semibold`}
                    >
                      Month
                    </label>
                    <select
                      onChange={(e) => setAgeMonth(e.target.value)}
                      className="select select-primary w-full "
                      value={ageMonth}
                    >
                      {/* <option disabled selected={true}>
                        Month
                      </option> */}
                      {months.map((item, index) => (
                        <option
                          value={index}
                          key={index}
                          disabled={item == "Month" ? true : false}
                        >
                          {item}
                        </option>
                      ))}
                      {/* <option value={0}>Jan</option>
                      <option>Lost</option>
                      <option>Breaking Bad</option>
                      <option>Walking Dead</option> */}
                    </select>
                  </div>
                  <div className={` flex flex-col gap-y-1`}>
                    <label
                      htmlFor="year"
                      className={`text-lg text-white font-semibold`}
                    >
                      Year
                    </label>
                    <input
                      type="number"
                      placeholder="Year"
                      value={ageYear}
                      onChange={(e) => setAgeYear(e.target.value)}
                      className={`py-2 px-3 outline-none rounded-md`}
                    />
                  </div>
                  <p
                    className={`w-full flex items-center justify-center gap-x-2 text-white`}
                  >
                    <LiaBirthdayCakeSolid /> {age}
                  </p>
                  <button
                    onClick={handleCalculateAge}
                    className={`w-[100%] px-3 py-2 rounded-md flex justify-center font-semibold items-center gap-x-2 bg-gradient-to-r shadow-lg shadow-purple-700 hover:shadow-none from-violet-500 to-fuchsia-500 text-white`}
                  >
                    Calculate Age <CiCalculator2 className={`text-lg`} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarAndAgeCalculator;
