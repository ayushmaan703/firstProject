import React from "react";

export default function ThermoplasticEnclosures({ img, details }) {
  return (
    <>
      <div className="ml-4 sm:ml-5 bg-gradient-to-t from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-3 shadow-inner shadow-black">
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt="product"
                    className="  w-3/4 h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-3xl shadow-2xl shadow-black mb-4"
          />

          <span className=" px-4 py-2 flex">
            <div  className="bg-customOffwhite  hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-black  p-2 rounded-lg">
              <span className="ml-2 block sm:inline text-sm  ">{details}</span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
