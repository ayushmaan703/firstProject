import React from "react";

export default function ProcessInstruments({ heading, img, liItem }) {
  return (
    <div className="ml-4 sm:ml-5 bg-slate-200 py-4 px-4 sm:py-6 sm:px-6 rounded-lg my-5 shadow-md">
      <span className="font-bold text-lg sm:text-2xl text-center border-b border-black bg-lime-500 px-4 py-2 rounded-t-lg block mb-4 sm:mb-6">
        {heading}
      </span>

      <div className="my-4 flex flex-col">
        <img
          src={img}
          alt="product"
          className=" w-auto h-auto  border-2 border-black my-6 ml-7"
        />

        <ul className="list-disc list-inside  mx-2 sm:mx-5 mt-2">
          {liItem.map((item, index) => (
            <li className="  " key={index}>
              <span className="mb-1"> {item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}