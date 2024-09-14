import React from "react";

export default function ProcessInstruments({ heading, img, liItem, idx }) {
  return (
    <div
      className={` ${
        idx
          ? "bg-gradient-to-r from-purple-500 to-blue-500"
          : "bg-gradient-to-r from-blue-500 to-purple-500"
      }
    ml-4 sm:ml-5 bg-slate-200 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-3 shadow-inner shadow-black`}
    >
      <span className="font-bold text-lg sm:text-2xl text-center border-b-4 border-black px-4 py-2 rounded-t-xl block mb-4 sm:mb-6">
        {heading}
      </span>

      <div className="my-4 flex flex-col items-center">
        <img
          src={img}
          alt="product"
          className=" w-3/4 h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-3xl shadow-2xl shadow-black mb-4 "
        />

        <ul className="list-disc list-inside  mx-2 sm:mx-5 mt-5 ">
          {liItem.map((item, index) => (
            <li className="  " key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
