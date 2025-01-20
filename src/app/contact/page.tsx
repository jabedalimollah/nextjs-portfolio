"use client";
import React, { useEffect, useState } from "react";
import { FcContacts } from "react-icons/fc";
import { useSelector } from "react-redux";
import aboutDB from "../database/AboutDB.json";
import homeDB from "../database/HomeDB.json";

import { HomeDB } from "../page";
import {
  FaFacebook,
  FaGithub,
  FaHeadset,
  FaLink,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import dynamic from "next/dynamic";
// import AnimatedPicture from "@/components/animatedPicture";
import ContactAnimationLight from "../../../public/images/animation_picture/contact-light.json";
import ContactAnimationDark from "../../../public/images/animation_picture/contact-dark.json";
import { AboutDb } from "@/components/personalDetails";
import LocationAndWeatherApp from "@/components/locationAndWeatherApp";
const ContactForm = dynamic(() => import("@/components/contactForm"), {
  ssr: false,
});

let contactLight: string | object = ContactAnimationLight;
let contactDark: string | object = ContactAnimationDark;

const page: React.FC = () => {
  // ---------------- State --------------------
  const [contactData, setContactData] = useState<AboutDb | null>(null);
  const [socialMedia, setSocialMedia] = useState<HomeDB | null>(null);

  const isDarkmode = useSelector((state: any) => state.theme.darkmode);

  useEffect(() => {
    setContactData(aboutDB);
    setSocialMedia(homeDB);
  }, []);
  return (
    <div
      className={`w-full flex flex-col gap-y-4 items-center ${
        isDarkmode ? "bg-slate-800" : "bg-purple-50 "
      } `}
    >
      {/* ====================== Contact Me Section ================== */}
      {/* ------------------------ Email, Phone Number and Address ------------------ */}
      <section className={`w-[80%]`}>
        <div className={` flex flex-col items-center mt-4 mb-6`}>
          <h1
            className={`flex items-center gap-x-2 text-4xl font-bold ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            <FcContacts />
            Contact
            <span
              className={`${
                isDarkmode ? "text-purple-500" : " text-purple-700"
              }`}
            >
              Me
            </span>
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

        <div className={`w-full flex gap-x-4`}>
          <div
            className={`w-[30%] flex items-center gap-x-3 shadow-md py-2 px-2 ${
              isDarkmode
                ? "bg-slate-900 hover:bg-slate-950"
                : "hover:bg-purple-100 bg-white border"
            }  rounded-md`}
          >
            <div className={`w-[20%]`}>
              {" "}
              <img
                src={"/images/smartphone.svg"}
                alt="Phone Icon"
                className={`w-full`}
              />
            </div>
            <div className={`flex-1`}>
              <h3
                className={`font-bold text-lg ${
                  isDarkmode ? "text-purple-500" : "text-purple-700"
                }`}
              >
                Phone
              </h3>
              <span
                className={`font-semibold ${
                  isDarkmode ? "text-slate-200" : "text-black"
                }`}
              >
                {contactData?.phone_number}
              </span>
            </div>
          </div>
          <div
            className={`w-[30%] flex items-center gap-x-3 shadow-md py-2 px-2 ${
              isDarkmode
                ? "bg-slate-900 hover:bg-slate-950"
                : "hover:bg-purple-100 bg-white border"
            }  rounded-md`}
          >
            <div className={`w-[20%]`}>
              {" "}
              <img
                src={"/images/email.svg"}
                alt="Phone Icon"
                className={`w-full`}
              />
            </div>
            <div className={`flex-1`}>
              <h3
                className={`font-bold text-lg ${
                  isDarkmode ? "text-purple-500" : "text-purple-700"
                }`}
              >
                Email
              </h3>
              <a
                href={`mailto:${contactData?.email}`}
                className={`font-semibold hover:underline  ${
                  isDarkmode ? "text-slate-200" : "text-black"
                }`}
              >
                {contactData?.email}
              </a>
            </div>
          </div>
          <div
            className={`w-[30%] flex items-center gap-x-3 shadow-md py-2 px-2 ${
              isDarkmode
                ? "bg-slate-900 hover:bg-slate-950"
                : "hover:bg-purple-100 bg-white border"
            }  rounded-md`}
          >
            <div className={`w-[20%]`}>
              {" "}
              <img
                src={"/images/home.svg"}
                alt="Phone Icon"
                className={`w-full`}
              />
            </div>
            <div className={`flex-1`}>
              <h3
                className={`font-bold text-lg ${
                  isDarkmode ? "text-purple-500" : "text-purple-700"
                }`}
              >
                Address
              </h3>
              <a
                href={`${contactData?.location}`}
                target="_blank"
                className={`font-semibold hover:underline  ${
                  isDarkmode ? "text-slate-200" : "text-black"
                }`}
              >
                {contactData?.address}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------- Social Media Links ----------------------- */}
      <section className={`w-[80%]`}>
        <div
          className={`w-full py-2 border-b-2 ${
            isDarkmode ? "border-purple-500" : "border-purple-700"
          }`}
        >
          <h1
            className={`text-2xl font-bold flex items-center gap-x-2 ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            <FaLink /> Social Media{" "}
            <span
              className={`${
                isDarkmode ? "text-purple-500" : "text-purple-700"
              }`}
            >
              Links
            </span>
          </h1>
        </div>
        <div className={`w-full flex gap-x-2 my-4`}>
          <a
            href={socialMedia?.instagram}
            target="_blank"
            className={`py-2 px-3 flex items-center text-lg font-semibold gap-x-1 border-2 shadow-md text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white rounded-md  `}
          >
            <AiFillInstagram /> Instagram
          </a>
          <a
            href={socialMedia?.facebook}
            target="_blank"
            className={`py-2 px-3 flex items-center text-lg font-semibold gap-x-1 border-2 shadow-md ${
              isDarkmode
                ? "text-blue-500 border-blue-600"
                : "text-blue-500 border-blue-600"
            } hover:bg-blue-600 hover:text-white rounded-md  `}
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href={socialMedia?.github}
            target="_blank"
            className={`py-2 px-3 flex items-center text-lg font-semibold gap-x-1 border-2 shadow-md ${
              isDarkmode
                ? "text-slate-300 border-slate-300 hover:border-slate-600 hover:bg-slate-600"
                : "text-slate-600 border-slate-600 hover:bg-slate-600"
            }    hover:text-white rounded-md  `}
          >
            <FaGithub /> Github
          </a>
          <a
            href={socialMedia?.linkedin}
            target="_blank"
            className={`py-2 px-3 flex items-center text-lg font-semibold gap-x-1 border-2 shadow-md ${
              isDarkmode
                ? "text-blue-500 border-blue-500 hover:bg-blue-500"
                : "text-blue-600 border-blue-600 hover:bg-blue-600"
            } hover:text-white rounded-md  `}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={socialMedia?.youtube}
            target="_blank"
            className={`py-2 px-3 flex items-center text-lg font-semibold gap-x-1 border-2 shadow-md text-red-600 border-red-600 hover:bg-red-600 hover:text-white rounded-md  `}
          >
            <FaYoutube /> Youtube
          </a>
          <a
            href={socialMedia?.x}
            target="_blank"
            className={`py-2 px-3 flex items-center text-lg font-semibold gap-x-1 border-2 shadow-md ${
              isDarkmode
                ? "text-slate-300 border-slate-300 hover:border-slate-600"
                : "text-slate-600 border-slate-600"
            } hover:bg-slate-600 hover:text-white rounded-md  `}
          >
            <FaXTwitter /> X
          </a>
        </div>
      </section>
      <LocationAndWeatherApp />
      {/* ---------------- Contact Form Section ---------------- */}
      <section className={`w-[80%] flex flex-col items-center`}>
        <div className={``}>
          <div className={`flex flex-col items-center`}>
            <h1
              className={`flex items-center gap-x-2 text-4xl font-bold text-slate-400`}
            >
              <FaHeadset /> Get in
              <span className={`text-purple-600`}>Touch</span>
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
        </div>
        {/* --------------------- Contact Form ---------------- */}

        <div className={`w-full flex justify-center items-center`}>
          <div
            className={`w-[80%] my-4 flex justify-between items-center  shadow-md ${
              isDarkmode ? "bg-slate-900" : "bg-white"
            } rounded-md`}
          >
            {" "}
            <ContactForm />
            {/* -------------- Animated Picture ----------- */}
            {/* <div className={`w-[48%] h-full flex items-center justify-center`}>
              {isDarkmode ? (
                <AnimatedPicture pathString={contactDark} />
              ) : (
                <AnimatedPicture pathString={contactLight} />
              )}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
