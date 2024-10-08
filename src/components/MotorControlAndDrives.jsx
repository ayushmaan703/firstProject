import React from "react";

export default function MotorControlAndDrives({
  heading,
  details,
  liItem,
  idx,
}) {
  return (
    <>
      <div
        className={`ml-4 sm:ml-5 ${
          idx
            ? "bg-gradient-to-r from-purple-500 to-blue-500"
            : "bg-gradient-to-r from-blue-500 to-purple-500"
        } py-4 px-4 sm:py-6 sm:px-6 rounded-lg my-2 shadow-inner shadow-black`}
      >
        <span className="font-bold text-lg sm:text-2xl text-center border-b-4 border-black px-4 py-2 rounded-t-lg block mb-4 sm:mb-6">
          {heading}
        </span>

        <div className="my-4 flex flex-col ">
          <span className="font-lora text-sm sm:text-base ml-2 sm:ml-5 mb-4">
            {details}
          </span>

          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mx-2 sm:mx-5 mt-2">
            {liItem.map((item, index) => (
              <li
                className="border-2 border-black p-3 rounded-lg flex flex-col bg-customOffwhite  hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-black "
                key={index}
              >
                <span className="text-lg font-semibold mb-2">{item[0]}</span>
                <span className="text-sm sm:text-base">{item[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
