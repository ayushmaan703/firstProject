import React from "react";
import Homepage from "./pages/HomePage";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
// import { FaCopyright } from "react-icons/fa6";
import "../src/pages/Home.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Products />
      <AboutUs />
      <ContactUs />

      <footer className="bg-green-500 h-16  flex justify-center items-center animated-bg">
        <div className=" flex  justify-center items-center">
          {/* <FaCopyright className="mx-5" />{" "} */}
          <span className="text-lgs font-bold text-white">
            SHEETAL ENTERPRISES
          </span>
        </div>
      </footer>
    </>
  );
}
