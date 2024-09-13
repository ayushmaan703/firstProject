import React from "react";

export default function Level({ heading, img, subHeading, details }) {
  return (
    <>
      <div className="ml-4 sm:ml-5 bg-slate-200 py-4 px-4 sm:py-6 sm:px-6 rounded-lg my-5 shadow-md">
        <span className="font-bold text-lg sm:text-2xl text-center border-b border-black bg-lime-500 px-4 py-2 rounded-t-lg block mb-4 sm:mb-6">
          {heading}
        </span>
        <div className="flex flex-col">
          <img
            src={img}
            alt="product"
            className=" w-auto h-auto  border-2 border-black m-6"
          />
          {subHeading.map((head, index) => (
            <span key={index} className=" px-4 py-2 flex">
              <div className="border-2 border-black bg-white p-2 rounded-lg">
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
