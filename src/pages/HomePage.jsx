import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="bg-green-400 h-screen w-full flex flex-col justify-center items-center animated-bg"
      >
        <div className="animate-spread text-6xl sm:text-9xl font-extrabold text-white">
          <div className="flex justify-center items-center flex-col spa">
            <span>SHEETAL </span>
            <span>ENTERPRISES</span>
          </div>
        </div>
        <p className="text-black text-lg sm:text-xl font-bold font-serif m-3 text-center max-w-4xl p-4">
         MOTO
        </p>
      </div>
    </>
  );
}
