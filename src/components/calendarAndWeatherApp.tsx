"use client";
import React from "react";
import WeatherApp from "./weatherApp";

const CalendarAndWeatherApp = () => {
  return (
    <section className={`w-full flex justify-center my-6`}>
      <div className={`w-[80%]  flex  gap-y-6 py-6`}>
        <div className={`w-[50%]`}></div>
        {/* =============== Weather App =============== */}
        <WeatherApp />
      </div>
    </section>
  );
};

export default CalendarAndWeatherApp;
