import React, { useState } from "react";

function AboutProd({ heading, img, details }) {
  return (
    <>
      <div className="flex flex-col items-center" 
      >
        <span className="font-thin mb-1 mt-7 mx-7 text-xl sm:text-2xl">
          {heading}
        </span>
        <img
          src={img}
          alt="product"
          className="w-9/10 h-9/10 transform transition-transform duration-500 ease-in-out hover:scale-110 border-2 border-black my-4"
        />
        <span className="m-4 font-light font-serif text-center">{details}</span>
      </div>
    </>
  );
}
export default AboutProd;
