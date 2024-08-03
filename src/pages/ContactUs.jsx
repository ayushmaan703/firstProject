import React, { useEffect, useState } from "react";
import "./spreadAnimation.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div
        id="contactUs"
        className="flex flex-col justify-center items-center border-b-2 border-black p-4"
      >
        <p
          className={`text-4xl sm:text-5xl font-light my-4 sm:m-8 border-b-2 border-black p-3 ${
            isVisible ? "animated-heading" : ""
          }`}
        >
          CONTACT US
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:justify-center">
          <div className="m-4 sm:m-8 w-full sm:w-80">
            <p className="text-xl sm:text-2xl font-medium border-b-2 border-black m-3 p-4 text-center sm:text-left">
              Our Locations
            </p>
            <div className="text-left pl-4 sm:pl-7 flex">
              <span className="text-lg sm:text-xl mr-3 font-normal">
                Office:
              </span>
              <span className="mt-1">
                <div className=" flex flex-col">
                  <span>Plot No 18 </span>
                  <span>Cross 2B Tapoven Enclave</span>
                  <span>Raipur Road, Dehradun </span>
                  <span>Uttarakhand 248001</span>
                </div>
              </span>
            </div>
          </div>
          <div className="m-4 sm:m-8 w-full sm:w-80">
            <p className="text-xl sm:text-2xl font-medium border-b-2 border-black m-3 p-4 text-center sm:text-left ">
              Email & Phone
            </p>
            <div className="text-left pl-4 sm:pl-7 ">
              <div>
                <span className="text-lg sm:text-xl mr-3 font-normal">
                  Email:
                </span>
                <span>sheetalenterprises4801@gmail.com</span>
              </div>
              <div className="h-16 flex ">
                <span className="text-lg sm:text-xl mr-3 font-normal">
                  Phone:
                </span>
                <div className=" flex flex-col">
                  <span>+91 8410558047</span>
                  <span>135-2781439</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="m-4 sm:m-8 w-full sm:w-80">
            <p className="text-xl sm:text-2xl font-medium border-b-2 border-black m-3 p-4 text-center sm:text-left">
              Social Media Links
            </p>
            <div className="text-center sm:text-left pl-4 sm:pl-7 flex justify-center sm:justify-start">
              <a
                href="#"
                className="mx-4 sm:mr-16 my-2 hover:scale-125 transition-transform"
              >
                <FaFacebook className="text-2xl sm:text-3xl" />
              </a>
              <a
                href="#"
                className="mx-4 sm:mr-16 my-2 hover:scale-125 transition-transform"
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>
              <a
                href="#"
                className="mx-4 my-2 hover:scale-125 transition-transform"
              >
                <FaLinkedin className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
