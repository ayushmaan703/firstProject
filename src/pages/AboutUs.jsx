import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (isLargeScreen && window.scrollY > 1500) ||
        (!isLargeScreen && window.scrollY > 3000)
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
  }, [isLargeScreen, isVisible]);

  return (
    <>
      <div
        id="aboutUs"
        className="flex flex-col justify-center items-center border-b-2 border-black p-10"
      >
        <p
          className={` text-4xl sm:text-5xl font-light my-4 sm:m-8 border-b-2 border-black p-3  ${
            isVisible
              ? isLargeScreen
                ? "animated-heading"
                : "animate-smallSpread"
              : ""
          }`}
        >
          ABOUT US
        </p>
        <div className=" font-light text-center mb-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            nesciunt. Eligendi blanditiis adipisci eum sequi numquam!
            Reprehenderit modi nam assumenda libero consectetur voluptates
            accusantium aliquid accusamus at iste? Sed, nulla. Lorem ipsum Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
            accusantium sint beatae exercitationem dolores hic natus odit non?
            Iusto voluptatum nobis odit. Minus consequatur saepe omnis animi
            officia nostrum sapiente!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            nesciunt. Eligendi blanditiis adipisci eum sequi numquam!
            Reprehenderit modi nam assumenda libero consectetur voluptates
            accusantium aliquid accusamus at iste? Sed, nulla. Lorem ipsum{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            nesciunt. Eligendi blanditiis adipisci eum sequi numquam!
            Reprehenderit modi nam assumenda libero consectetur voluptates
            accusantium aliquid accusamus at iste? Sed, nulla. Lorem ipsum{" "}
          </p>
        </div>
      </div>
    </>
  );
}
