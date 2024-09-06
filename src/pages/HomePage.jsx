import React, { useEffect, useState } from "react";
import "./Home.css";
import Products from "./Products";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        id="home"
        className="bg-green-400 h-screen w-full flex flex-col justify-center items-center animated-bg relative"
      >
        <div className="text-4xl sm:text-9xl font-extrabold text-white">
          <div
            className={`flex justify-center items-center flex-col ${
              isLargeScreen ? "animate-spread " : "animate-smallSpread"
            }`}
          >
            <span>SHEETAL </span>
            <span>ENTERPRISES</span>
          </div>
        </div>
        <p className="text-black text-lg sm:text-xl font-bold font-serif m-3 text-center max-w-4xl p-4 ">
          Innovation Excellence Reliability and Dedicated Services
        </p>
        <span className="text-black text-sm sm:text-sm font-bold font-serif  text-right max-w-4xl absolute bottom-0 right-0 m-3">
          <div className=" flex flex-col ">
            <p>Process & Machines Automation Systems </p>
            <p>Johns Electric Trading Pvt Ltd</p>
            <p>PS Technologies</p>
            <p>Johns Automation Systems</p>
          </div>
        </span>
      </div>
    </>
  );
}
