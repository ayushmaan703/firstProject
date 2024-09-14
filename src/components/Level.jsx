import React from "react";

export default function Level({ heading, img, subHeading, details }) {
  return (
    <>
      <div className="ml-4 sm:ml-5 bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-3 shadow-inner shadow-black">
        <span className="font-bold text-lg sm:text-2xl text-center border-b border-black bg-lime-500 px-4 py-2 rounded-t-lg block mb-4 sm:mb-6">
          {heading}
        </span>
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt="product"
            className="  w-3/4 h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-3xl shadow-2xl shadow-black mb-4"
          />
          {subHeading.map((head, index) => (
            <span key={index} className=" px-4 py-2 flex">
              <div className="bg-customOffwhite  hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-black  p-2 rounded-lg">
                <span className="mr-3 font-semibold  text-center text-base sm:text-lg md:text-base ">
                  {head}:
                </span>
                <span className="ml-2 block sm:inline text-sm  ">
                  {details[index]}
                </span>
              </div>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
