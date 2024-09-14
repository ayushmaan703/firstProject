import React from "react";

export default function SomeRandom({ heading, img, liItem, idx }) {
  return (
    <div
      className={`ml-4 sm:ml-5 ${
        idx
          ? "bg-gradient-to-t from-purple-500 to-blue-500"
          : "bg-gradient-to-t from-blue-500 to-purple-500"
      } py-4 px-4 sm:py-6 sm:px-6 rounded-3xl my-3 shadow-inner shadow-black`}
    >
      <span className="font-bold text-lg sm:text-2xl text-center border-b border-black bg-lime-500 px-4 py-2 rounded-t-lg block mb-4 sm:mb-6">
        {heading}
      </span>

      <div className="my-4 flex flex-col items-center">
        <ul className="list-disc list-inside  mx-2 sm:mx-5 mt-2">
          {liItem.map((item, index) => (
            <li className="  " key={index}>
              <span className="mb-1"> {item}</span>
            </li>
          ))}
        </ul>
        <img
          src={img}
          alt="product"
          className=" w-1/2 h-auto  transform transition-transform duration-500 ease-in-out hover:scale-110 rounded-3xl shadow-2xl shadow-black mt-6 "
        />
      </div>
    </div>
  );
}
