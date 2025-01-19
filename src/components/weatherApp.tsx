"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuCloudSun, LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";
import { useSelector } from "react-redux";

type WeatherIconKey =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "13d"
  | "13n";

const allIcons: Record<WeatherIconKey, string> = {
  "01d": "/images/weather_app_images/clear.png",
  "01n": "/images/weather_app_images/clear.png",
  "02d": "/images/weather_app_images/cloud.png",
  "02n": "/images/weather_app_images/cloud.png",
  "03d": "/images/weather_app_images/cloud.png",
  "03n": "/images/weather_app_images/cloud.png",
  "04d": "/images/weather_app_images/drizzle.png",
  "04n": "/images/weather_app_images/drizzle.png",
  "09d": "/images/weather_app_images/rain.png",
  "09n": "/images/weather_app_images/rain.png",
  "10d": "/images/weather_app_images/rain.png",
  "10n": "/images/weather_app_images/rain.png",
  "13d": "/images/weather_app_images/snow.png",
  "13n": "/images/weather_app_images/snow.png",
};

const WeatherApp = () => {
  const [search, setSearch] = useState("Bankura");
  const [errorCode, setErrorCode] = useState(200);
  const [loading, setLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState({
    humidity: "",
    windSpeed: 0,
    temperature: 0,
    location: "",
    icon: "/images/weather_app_images/clear.png",
    description: "",
  });
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  const handleSearch = async () => {
    try {
      if (search.length) {
        setLoading(true);
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.NEXT_PUBLIC_Weather_API_KEY}`
        );

        let icon: string;
        if (res?.data.weather[0].icon && res.data.weather[0].icon in allIcons) {
          icon = allIcons[res.data.weather[0].icon as WeatherIconKey];
        } else {
          icon = "/images/weather_app_images/clear.png";
        }
        setWeatherDetails({
          humidity: res?.data?.main.humidity,
          windSpeed: res?.data?.wind.speed,
          temperature: Math.floor(res?.data?.main.temp),
          location: res?.data?.name,
          icon: icon,
          description: res?.data?.weather[0].description,
        });
        setLoading(false);
        setErrorCode(200);
      }
    } catch (error) {
      setErrorCode(404);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div
      className={`w-[50%] flex flex-col items-center shadow-2xl ${
        isDarkmode
          ? "shadow-slate-900 bg-slate-900"
          : "shadow-slate-200 bg-white"
      }  pb-6 rounded-md`}
    >
      <h1
        className={`w-full flex justify-center gap-x-2 items-center rounded-t-md bg-purple-600 font-mono text-white font-semibolds text-2xl py-2`}
      >
        {/* ⛅ */}
        <LuCloudSun />
        Check Weather
      </h1>
      <div
        className={`w-full my-4 flex gap-x-2 ${
          isDarkmode ? "text-purple-500" : "text-purple-600"
        } px-4`}
      >
        <input
          type="text"
          placeholder="Enter City Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`w-full bg-transparent border  outline-none ${
            isDarkmode
              ? "focus:bg-slate-800 border-purple-500"
              : "focus:bg-purple-50 border-purple-600"
          }  rounded-full px-4 py-2 `}
        />
        <button
          onClick={handleSearch}
          className={`p-4 rounded-full border ${
            isDarkmode ? "border-purple-500" : "border-purple-600"
          }  hover:bg-purple-600 hover:text-white`}
        >
          <FiSearch />
        </button>
      </div>

      {loading ? (
        <div
          className={`w-full flex items-center justify-center py-5 ${
            isDarkmode ? "text-purple-500" : "text-purple-600"
          }  text-lg`}
        >
          <div className={`flex gap-x-2`}>
            <span className="loading loading-spinner loading-md"></span>{" "}
            Loading...
          </div>
        </div>
      ) : errorCode === 200 ? (
        <>
          <h2
            className={`w-full flex items-center justify-center gap-x-2 text-lg ${
              isDarkmode ? "text-purple-500" : "text-purple-600"
            } `}
          >
            <FaLocationDot />
            {weatherDetails?.location}
          </h2>
          <div className={`w-[20%]`}>
            <img
              src={`${weatherDetails?.icon}`}
              alt="Weather_Icon"
              className={`w-[100%]`}
            />
          </div>

          <p
            className={`text-5xl ${
              isDarkmode ? "text-purple-500" : "text-purple-600"
            }`}
          >
            {weatherDetails?.temperature}°C
          </p>
          <p
            className={`text-2xl capitalize ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            {weatherDetails?.description}
          </p>
          <div
            className={`w-full flex justify-around mb-3 mt-6 ${
              isDarkmode ? "text-purple-500" : "text-purple-600"
            }`}
          >
            <div className={`flex flex-col items-center`}>
              <WiHumidity className={`text-5xl `} />

              <div className={`flex flex-col items-center`}>
                <p>{weatherDetails?.humidity} %</p>
                <span className={`${isDarkmode ? "text-white" : "text-black"}`}>
                  Humidity
                </span>
              </div>
            </div>
            <div className={`flex flex-col items-center`}>
              <LuWind className={`text-5xl`} />

              <div className={`flex flex-col items-center`}>
                <p>{weatherDetails?.windSpeed} Km/h</p>
                <span className={`${isDarkmode ? "text-white" : "text-black"}`}>
                  Wind Speed
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={`w-full flex justify-center items-center`}>
          <p
            className={`flex flex-col items-center ${
              isDarkmode ? "text-purple-500" : "text-purple-600"
            }  font-semibold text-xl`}
          >
            <BiSolidError
              className={`text-4xl ${
                isDarkmode ? "text-red-500" : "text-red-600"
              } `}
            />
            City Not Found
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
