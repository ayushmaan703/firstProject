import React from "react";

export default function ThermoplasticEnclosures({ img, details }) {
  return (
    <>
      <div className="ml-4 sm:ml-5 bg-slate-200 py-4 px-4 sm:py-6 sm:px-6 rounded-lg my-5 shadow-md">
        <div className="flex flex-col">
          <img
            src={img}
            alt="product"
            className=" w-auto h-auto  border-2 border-black m-6"
          />

          <span className=" px-4 py-2 flex">
            <div className="border-2 border-black bg-white p-2 rounded-lg">
              <span className="ml-2 block sm:inline text-sm  ">{details}</span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
