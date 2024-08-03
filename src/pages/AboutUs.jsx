import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
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

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div
        id="aboutUs"
        className="flex justify-center flex-col items-center mx-10 my-10 border-b-2 border-black p-10"
      >
        <p
          className={` text-5xl font-thin border-b-2 border-black p-3 mt-20  mb-20 ${
            isVisible ? "animated-heading" : ""
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
