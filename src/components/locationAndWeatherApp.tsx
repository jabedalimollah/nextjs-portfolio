"use client";
import React, { useEffect, useState } from "react";
import WeatherApp from "./weatherApp";
import { TiLocation } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import { AboutDb } from "./personalDetails";
import aboutDB from "../app/database/AboutDB.json";
import { useSelector } from "react-redux";
const LocationAndWeatherApp = () => {
  const [contactData, setContactData] = useState<AboutDb | null>(null);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setContactData(aboutDB);
  }, []);
  return (
    <section className={`w-full flex justify-center my-6`}>
      <div className={`w-[80%]  flex  gap-y-6 py-6`}>
        {/* ================== Google Map ================= */}
        <div
          className={`w-[50%] overflow-hidden px-6 pb-6 borders shadow-xl ${
            isDarkmode
              ? "shadow-slate-800 border-purple-500 bg-slate-900"
              : "shadow-slate-200 border-purple-600 bg-white"
          }   rounded-md`}
        >
          <h1
            className={`h-[10%] flex items-center gap-x-2 text-2xl ${
              isDarkmode ? "text-purple-500" : "text-purple-600"
            }  font-semibold`}
          >
            {/* <TiLocation /> */}
            <FaMapLocationDot />
            Location :-{" "}
            <a
              href={`${contactData?.location}`}
              target="_blank"
              className={`font-semibold hover:underline  ${
                isDarkmode ? "text-slate-200" : "text-black"
              }`}
            >
              {contactData?.address}
            </a>
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29331.05230981982!2d87.04244624211128!3d23.22919914480299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7a58c5fc2b411%3A0xfdbd0b45c0b4aa70!2sBankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1737347963065!5m2!1sen!2sin"
            // width={600}
            // height={450}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`w-full h-[90%] `}
          />
        </div>
        {/* =============== Weather App =============== */}
        <WeatherApp />
      </div>
    </section>
  );
};

export default LocationAndWeatherApp;
