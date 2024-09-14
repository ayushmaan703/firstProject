import React from "react";

function AboutProd({ heading, img, details }) {
  return (
    <>
      <div className="flex flex-col items-center md:m-3 lg:m-2 m-3 sm:m-3 p-3 rounded-3xl shadow-inner shadow-black bg-gradient-to-b from-blue-500 to-purple-500">
        <span className="font-lora  mt-7 mx-7 text-xl sm:text-xl text-customOffwhite ">
          {heading}
        </span>
        <img
          src={img}
          alt="product"
          className="w-auto h-auto transform transition-transform duration-500 ease-in-out hover:scale-110  my-2 shadow-xl shadow-black rounded-3xl mx-4 "
        />
        <span className=" mt-9 font-serif text-sm  text-center">{details}</span>
      </div>
    </>
  );
}
export default AboutProd;
