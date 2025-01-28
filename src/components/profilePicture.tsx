import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Style from "../styles/profilePicture.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { HomeDB } from "@/app/page";
import homeDB from "../app/database/HomeDB.json";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AboutDb } from "./personalDetails";
import aboutDB from "../app/database/AboutDB.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HiSpeakerWave } from "react-icons/hi2";

interface Profile_picture {
  profile_picture: string;
}
const ProfilePicture: React.FC<Profile_picture> = ({ profile_picture }) => {
  const [socialMedia, setSocialMedia] = useState<HomeDB | null>(null);
  const [aboutData, setAboutData] = useState<AboutDb | null>(null);
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  const handleSpeech = () => {
    const value = new SpeechSynthesisUtterance("I am Jaabed Ali Mollah");
    window.speechSynthesis.speak(value);
  };

  useEffect(() => {
    setSocialMedia(homeDB);
    setAboutData(aboutDB);
  }, []);
  return (
    <div
      className={`w-[100%] md:w-[80%] lg:w-[26%] flex items-center justify-center relative ${
        isDarkmode ? "text-purple-100" : "text-purple-700"
      }`}
    >
      <div
        className={`w-full h-full bg-transparent shadow-2xls shadow-purple-700 relative m-10 rounded-full flex items-center justify-center `}
      >
        {" "}
        <div
          className={`w-full h-full rounded-full flex items-center justify-center relative p-6`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <button className={`w-full h-full relative z-30 `}>
                <img
                  src={profile_picture}
                  alt="Jabed Ali"
                  className={`w-[100%] rounded-full p-6s shadow-mds`}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]s ">
              <DialogHeader>
                <DialogTitle>
                  <p
                    className={`w-full  flex items-center justify-center gap-x-2 text-xl tracking-wide font-semibold text-purple-600`}
                  >
                    Jabed Ali Mollah
                    <button
                      onClick={handleSpeech}
                      className={`border hover:border-purple-500 hover:bg-slate-100 rounded-full p-2`}
                    >
                      <HiSpeakerWave />
                    </button>
                  </p>
                </DialogTitle>
                <DialogDescription>
                  {/* My Name is Jabed Ali Mollah. */}
                </DialogDescription>
              </DialogHeader>
              {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div> */}
              <div className={`w-full flex items-center justify-center`}>
                {/* <img
                  src={profile_picture}
                  alt="my_picture"
                  className={`w-full`}
                /> */}
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  // plugins={[Autoplay({ delay: 2000 })]}
                  className="w-[80%] max-w-xss"
                >
                  <CarouselContent>
                    {aboutData?.all_pictures?.map((image, index) => (
                      <CarouselItem key={index} className={`basis-1/1 w-full`}>
                        <div className="w-full h-full ">
                          <img
                            src={image}
                            alt={image}
                            className="w-full h-[35vh] lg:h-[55vh]"
                          />
                        </div>
                        {/* <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div> */}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>{" "}
        </div>
        {/* <img
          src={profile_picture}
          alt="Jabed Ali"
          className={`w-[100%] rounded-full p-6 shadow-mds`}
        /> */}
        <div
          className={`w-full h-full z-10 p-10 rounded-full flex items-center justify-center border border-dashed border-purple-700 absolute top-0 left-0 ${Style.profile_pic_animation1}`}
        >
          <a
            href={socialMedia?.facebook}
            target="_blank"
            className={`absolute -top-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
              isDarkmode ? "bg-purple-100 text-black" : "bg-white"
            } p-2 rounded-full `}
          >
            <FaFacebookF className={`text-sm`} />
          </a>
          <a
            href={socialMedia?.youtube}
            target="_blank"
            className={`absolute -bottom-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
              isDarkmode ? "bg-purple-100 text-black" : "bg-white"
            } p-2 rounded-full `}
          >
            <FaYoutube className={`text-sm`} />
          </a>
        </div>
      </div>
      <div
        className={` w-full h-full p-10 rounded-full flex items-center justify-center border border-dotted shadow-2xls shadow-purple-700 border-purple-700 absolute top-0 left-0 ${Style.profile_pic_animation}`}
      >
        <a
          href={socialMedia?.github}
          target="_blank"
          className={`absolute -top-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-100 text-black" : "bg-white"
          } p-2 rounded-full `}
        >
          <FaGithub className={`text-sm`} />
        </a>
        <a
          href={socialMedia?.linkedin}
          target="_blank"
          className={`absolute -bottom-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-100 text-black" : "bg-white"
          } p-2 rounded-full `}
        >
          <FaLinkedin className={`text-sm`} />
        </a>
        <a
          href={socialMedia?.x}
          target="_blank"
          className={`absolute -left-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-100 text-black" : "bg-white"
          } p-2 rounded-full `}
        >
          <FaXTwitter className={`text-sm`} />
        </a>
        <a
          href={socialMedia?.instagram}
          target="_blank"
          className={`absolute -right-4 border border-dotted shadow-md border-purple-800 hover:bg-purple-800 hover:text-white ${
            isDarkmode ? "bg-purple-100 text-black" : "bg-white"
          } p-2 rounded-full `}
        >
          <AiFillInstagram className={`text-sm`} />
        </a>
      </div>
    </div>
  );
};

export default ProfilePicture;
