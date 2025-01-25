import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";
import educationDB from "../app/database/EducationDB.json";
export interface EducationDB {
  id: number;
  institution_pic: string;
  institute_degree: string;
  institute_name: string;
  passing_year: string;
  isCompleted: boolean;
}
const EducationSection = () => {
  const [showHide, setShowHide] = useState<boolean>(false);
  const [educationData, setEducationData] = useState<EducationDB[] | null>(
    null
  );
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setEducationData(educationDB);
  }, []);
  return (
    <section className={`w-full flex flex-col items-center  gap-y-6 py-6`}>
      <div className={`flex flex-col items-center`}>
        <h1
          onClick={() => setShowHide(!showHide)}
          className={`flex items-center gap-x-2 text-4xl border-b-4s border-purple-500 my-3 font-bold cursor-pointer ${
            isDarkmode ? "text-purple-500" : "text-purple-700"
          }`}
        >
          <span className={`${isDarkmode ? "text-white" : "text-black"}`}>
            My
          </span>
          Education{" "}
          {/* <button className={` rounded-full hover:bg-slate-200`}> */}
          {showHide ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          {/* </button> */}
        </h1>
        <div
          className={`slide-line ${
            isDarkmode ? "slide-line-dark" : "slide-line-light"
          }`}
        ></div>
        <div
          className={`slide-line2 ${
            isDarkmode ? "slide-line-dark" : "slide-line-light"
          }`}
        ></div>
      </div>
      {/* <div className={`w-full flex justify-start border`}> */}
      {!showHide && (
        <ul className="timeline timeline-vertical timeline-compact flex w-[70%] ">
          {educationData?.map((item, index) => (
            <li key={index}>
              <hr className={`${item?.isCompleted && "bg-purple-700"}`} />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-5 w-5 ${
                    item?.isCompleted ? " text-purple-700" : "text-gray-500"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`timeline-end timeline-box w-full my-4 rounded-md md:rounded-xl hover:scale-x-95 transition-all shadow-md cursor-pointer ${
                  isDarkmode
                    ? "bg-slate-900 border-none border-black"
                    : "bg-white"
                } `}
              >
                <div className={`w-full flex flex-col md:flex-row gap-x-6 `}>
                  <div className={`w-full md:w-[30%] lg:w-[25%] h-40 `}>
                    <img
                      src={item?.institution_pic}
                      alt={item?.institute_name}
                      className={`w-full h-[100%] rounded-md`}
                    />
                  </div>
                  <div
                    className={`w-full md:w-[65%] lg:w-[70] py-4 flex flex-col gap-y-1`}
                  >
                    <h3
                      className={`font-bold text-lg md:text-2xl ${
                        isDarkmode ? "text-purple-500" : "text-purple-700"
                      }`}
                    >
                      {item?.institute_degree}
                    </h3>
                    <p
                      className={`text-sm md:text-base ${
                        isDarkmode
                          ? "text-slate-300 font-semibold"
                          : "text-slate-600 font-bold"
                      }`}
                    >
                      {item?.institute_name}
                    </p>
                    <span
                      className={`font-bold text-base md:text-lg ${
                        isDarkmode ? "text-green-600" : "text-green-800"
                      }`}
                    >
                      {item?.passing_year}
                    </span>
                  </div>
                </div>
              </div>
              <hr className={`${item?.isCompleted && "bg-purple-700"}`} />
            </li>
          ))}
        </ul>
      )}{" "}
      {/* </div> */}
    </section>
  );
};

export default EducationSection;
