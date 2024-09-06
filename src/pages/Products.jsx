import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
import products from "../constants/products.js";
import AboutProd from "../components/AboutProd.jsx";
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
        className="flex flex-col justify-center items-center border-b-2 border-black p-4 sm:p-10 mx-4 sm:mx-36"
      >
        <div className="flex flex-col justify-center items-center mb-10 ">
          <span
            className={`font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 font-serif text-center border-b border-black p-3 ${
              isVisible
                ? isLargeScreen
                  ? "animated-heading"
                  : "animate-smallSpread"
                : ""
            }`}
          >
            PRODUCTS
          </span>
          {/* <span className="mb-4 p-5 font-thin text-lg sm:text-xl text-center">
            product description
          </span> */}
        </div>
        <Details/>
       
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((prod) => (
            <AboutProd
              key={prod.id}
              heading={prod.heading}
              img={prod.img}
              details={prod.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
