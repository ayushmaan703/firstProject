import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
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
          <span className="mb-4 p-5 font-thin text-lg sm:text-xl text-center">
            product description
          </span>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="flex flex-col items-center">
            <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
              HEADING
            </span>
            <img
              src="https://www.simplexautomation.com/en/images/services/srv_03.png"
              alt="product"
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <span className="m-4 font-light font-serif text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia aperiam provident natus molestiae perspiciatis
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
              HEADING
            </span>
            <img
              src="https://www.simplexautomation.com/en/images/services/srv_03.png"
              alt="product"
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <span className="m-4 font-light font-serif text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia aperiam provident natus molestiae perspiciatis
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
              HEADING
            </span>
            <img
              src="https://www.simplexautomation.com/en/images/services/srv_03.png"
              alt="product"
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <span className="m-4 font-light font-serif text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia aperiam provident natus molestiae perspiciatis
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
              HEADING
            </span>
            <img
              src="https://www.simplexautomation.com/en/images/services/srv_03.png"
              alt="product"
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <span className="m-4 font-light font-serif text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia aperiam provident natus molestiae perspiciatis
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
              HEADING
            </span>
            <img
              src="https://www.simplexautomation.com/en/images/services/srv_03.png"
              alt="product"
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <span className="m-4 font-light font-serif text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia aperiam provident natus molestiae perspiciatis
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
              HEADING
            </span>
            <img
              src="https://www.simplexautomation.com/en/images/services/srv_03.png"
              alt="product"
              className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
            <span className="m-4 font-light font-serif text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia aperiam provident natus molestiae perspiciatis
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
