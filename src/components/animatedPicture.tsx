"use client";
import React from "react";
import Lottie from "lottie-react";
import ContactLight from "../../public/images/contact-light.json";
interface AnimationString {
  pathString: string | object;
}
const AnimatedPicture: React.FC<AnimationString> = ({ pathString }) => {
  return (
    <Lottie animationData={pathString} loop={true} className={`w-[80%]`} />
  );
};

export default AnimatedPicture;
