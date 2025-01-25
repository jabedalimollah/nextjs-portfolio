"use client";
import { HomeDB } from "@/app/page";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import homeDB from "../app/database/HomeDB.json";
import { useSelector } from "react-redux";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState<HomeDB | null>(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  useEffect(() => {
    setSocialMedia(homeDB);
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer
      className={`w-full text-white pt-6 ${
        isDarkmode ? "bg-slate-800" : "bg-purple-50"
      } `}
    >
      <div
        className={`w-full flex flex-col items-center justify-center gap-y-2  py-6 bg-purple-800`}
      >
        <p
          className={`text-3xl md:text-4xl py-2  font-serifs font-bidenatrial`}
        >
          {" "}
          Jabed Ali Mollah
        </p>
        <div className={`w-full flex justify-center gap-x-2`}>
          <a
            href={socialMedia?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 flex border hover:bg-white hover:text-purple-800 border-white rounded-full`}
          >
            <FaLinkedin />{" "}
          </a>
          <a
            href={socialMedia?.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 flex border hover:bg-white hover:text-purple-800 border-white rounded-full`}
          >
            <FaGithub />{" "}
          </a>
          <a
            href={socialMedia?.x}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 flex border hover:bg-white hover:text-purple-800 border-white rounded-full`}
          >
            <FaXTwitter />{" "}
          </a>
          <a
            href={socialMedia?.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 flex border hover:bg-white hover:text-purple-800 border-white rounded-full`}
          >
            <AiFillInstagram />{" "}
          </a>
        </div>
      </div>
      <div
        className={`w-full flex justify-center py-4 bg-purple-950 text-sm md:text-base`}
      >
        <p>Copyright ©{year} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
