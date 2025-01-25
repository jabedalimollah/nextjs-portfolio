import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";
import certificateDB from "../app/database/CertificateDB.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaImage } from "react-icons/fa";
export interface CertificateDB {
  id: number;
  course_certificate_image: string;
  course_name: string;
}

const CertificationSection = () => {
  const [showHide, setShowHide] = useState<boolean>(false);
  const [certificateData, setCertificateData] = useState<
    CertificateDB[] | null
  >(null);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  useEffect(() => {
    setCertificateData(certificateDB);
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
          Certificates {showHide ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
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
      {!showHide && (
        <div
          className={`w-[80%] h-full grid grid-cols-2 md:grid-cols-3  place-items-center  gap-6 `}
        >
          {certificateData?.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className={`relative w-full`}>
                  <img
                    src={item?.course_certificate_image}
                    alt="Certificate"
                    className={`shadow-xl border border-purple-700 rounded-md cursor-pointer hover:shadow-none`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 opacity-0  hover:opacity-75
                    hover:bg-black text-white text-lg  rounded-md transition-all cursor-pointer `}
                  >
                    <button
                      className={`flex items-center gap-x-2 font-semibold  uppercase`}
                    >
                      <FaImage />
                      View
                    </button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className=" w-full md:max-w-fit">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className={`w-full `}>
                  <img
                    src={item?.course_certificate_image}
                    alt="Certificate"
                    className={`w-full`}
                  />
                </div>
                {/* <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4"></div>
                  <div className="grid grid-cols-4 items-center gap-4"></div>
                </div> */}
                <DialogFooter></DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificationSection;
