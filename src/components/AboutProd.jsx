import React from "react";

function AboutProd({ heading, img, details }) {
  return (
    <>
      <div className="flex flex-col items-center m-3 p-3 rounded-2xl shadow-inner shadow-black backdrop-filter- ">
        <span className="font-lora  mt-7 mx-7 text-xl sm:text-xl ">
          {heading}
        </span>
        <img
          src={img}
          alt="product"
          className="w-auto h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 border-2 border-black my-2  "
        />
        <span className="  font-serif text-sm  text-center">{details}</span>
      </div>
    </>
  );
}
export default AboutProd;
