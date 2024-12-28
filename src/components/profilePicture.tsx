import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Style from "../styles/profilePicture.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { HomeDB } from "@/app/page";
import homeDB from "../app/database/HomeDB.json";
import { useSelector } from "react-redux";
interface Profile_picture {
  profile_picture: string;
}
const ProfilePicture: React.FC<Profile_picture> = ({ profile_picture }) => {
  const [socialMedia, setSocialMedia] = useState<HomeDB | null>(null);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  useEffect(() => {
    setSocialMedia(homeDB);
  }, []);
  return (
    <div
      className={`w-[26%] flex items-center justify-center relative ${
        isDarkmode ? "text-purple-100" : "text-purple-700"
      }`}
    >
      <div
        className={`w-full h-full bg-transparent shadow-2xls shadow-purple-700 relative m-10 rounded-full flex items-center justify-center `}
      >
        <img
          src={profile_picture}
          alt="Jabed Ali"
          className={`w-[100%] rounded-full p-6 shadow-mds`}
        />
        <div
          className={`w-full h-full z-10 p-10 rounded-full flex items-center justify-center border border-dashed border-purple-700 absolute top-0 left-0 ${Style.profile_pic_animation1}`}
        >
          <a
            href={socialMedia?.facebook}
            target="_blank"
            className={`absolute -top-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
              isDarkmode ? "bg-purple-700" : "bg-white"
            } p-2 rounded-full `}
          >
            <FaFacebookF className={`text-sm`} />
          </a>
          <a
            href={socialMedia?.youtube}
            target="_blank"
            className={`absolute -bottom-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
              isDarkmode ? "bg-purple-700" : "bg-white"
            } p-2 rounded-full `}
          >
            <FaYoutube className={`text-sm`} />
          </a>
        </div>
      </div>
      <div
        className={`w-full h-full p-10 rounded-full flex items-center justify-center border border-dotted shadow-2xls shadow-purple-700 border-purple-700 absolute top-0 left-0 ${Style.profile_pic_animation}`}
      >
        <a
          href={socialMedia?.github}
          target="_blank"
          className={`absolute -top-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-700" : "bg-white"
          } p-2 rounded-full `}
        >
          <FaGithub className={`text-sm`} />
        </a>
        <a
          href={socialMedia?.linkedin}
          target="_blank"
          className={`absolute -bottom-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-700" : "bg-white"
          } p-2 rounded-full `}
        >
          <FaLinkedin className={`text-sm`} />
        </a>
        <a
          href={socialMedia?.x}
          target="_blank"
          className={`absolute -left-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-700" : "bg-white"
          } p-2 rounded-full `}
        >
          <FaXTwitter className={`text-sm`} />
        </a>
        <a
          href={socialMedia?.instagram}
          target="_blank"
          className={`absolute -right-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-700" : "bg-white"
          } p-2 rounded-full `}
        >
          <AiFillInstagram className={`text-sm`} />
        </a>
      </div>
    </div>
  );
};

export default ProfilePicture;
