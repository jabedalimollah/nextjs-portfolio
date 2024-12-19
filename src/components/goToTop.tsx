"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const goToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const goToBtn = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = (): void => {
    let heightToHidden: number = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {" "}
      {isVisible && (
        <div
          onClick={goToBtn}
          className={`to-top-animation fixed bottom-12 right-10 bg-purple-600 hover:bg-purple-700 text-white shadow-xl p-2 rounded-full`}
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default goToTop;
