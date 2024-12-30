import React from "react";

function AboutProd({ heading, img, details }) {
  return (
    <>
      <div className="flex flex-col items-center p-3 m-3 shadow-inner md:m-3 lg:m-2 sm:m-3 rounded-3xl shadow-black bg-gradient-to-b from-blue-500 to-purple-500 ">
        <span className="text-xl font-lora mt-7 mx-7 sm:text-xl text-customOffwhite ">
          {heading}
        </span>
        <img
          src={img}
          alt="product"
          className="w-auto h-auto mx-4 my-2 transition-transform duration-500 ease-in-out transform shadow-xl hover:scale-110 shadow-black rounded-3xl "
        />
        <span className="font-serif text-sm text-center mt-9">{details}</span>
      </div>
    </>
  );
}
export default AboutProd;
