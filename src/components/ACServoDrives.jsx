import React from "react";

export default function ACServoDrives({ heading, liItem }) {
  return (
    <>
      <div className="ml-4 sm:ml-5 bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-4 sm:py-6 sm:px-6 rounded-lg my-5 shadow-inner shadow-black">
        <span className="font-bold text-lg sm:text-2xl text-center border-b border-black bg-lime-500 px-4 py-2 rounded-t-lg block mb-4 sm:mb-6">
          {heading}
        </span>

        <div className="my-4 flex flex-col">
          <ul className="list-disc list-inside  mx-2 sm:mx-5 mt-2">
            {liItem.map((item, index) => (
              <li className="  " key={index}>
                <span className="mb-1"> {item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
