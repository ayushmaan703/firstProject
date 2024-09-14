import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
import Details from "./Details.jsx";

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (isLargeScreen && window.scrollY > 250) ||
        (!isLargeScreen && window.scrollY > 250)
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="products"
        className="flex flex-col justify-center items-center border-b-2 border-black p-4 sm:p-10 filter mt-4 lg:mx-10 rounded-3xl"
      >
        <div className="flex flex-col justify-center items-center mb-10 ">
          <span
            className={`font-extrabold font-montserrat text-4xl sm:text-5xl mt-10 sm:mt-20 text-center border- border-b-4 border-black p-3 ${
              isVisible
                ? isLargeScreen
                  ? "animated-heading"
                  : "animate-smallSpread"
                : ""
            }`}
          >
            PRODUCTS & SERVICES
          </span>
          {/* <span className="mb-4 p-5 font-thin text-lg sm:text-xl text-center">
            product description
          </span> */}
        </div>
        <Details />
      </div>
    </>
  );
}
