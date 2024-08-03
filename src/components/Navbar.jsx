import React, { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import "./Navbar.css";
function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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
      <nav
        className={`navbar w-full bg-slate-50  flex justify-between items-center p-4 sm:gap-5 gap-2 sticky top-0 z-50 ${
          isVisible ? "visible" : "h-0"
        }`}
      >
        <div className="flex gap-2 justify-center items-center space-x-2">
          <img
            src="/logo-CCalxPd4.png"
            className="w-50 h-8"
            alt="logo"
          />
          <span className="font-bold text-black">SHEETAL ENTERPRISES</span>
        </div>
        <div className="text-black space-x-2 sm:block hidden">
          <a href="#home">
            <button className="hover:scale-125 sm:px-4 sm:py-2 p-2">
              Home
            </button>
          </a>
          <a href="#products">
            <button className="hover:scale-125 sm:px-4 sm:py-2 p-2">
              Products
            </button>
          </a>
          <a href="#aboutUs">
            <button className="hover:scale-125 sm:px-4 sm:py-2 p-2">
              About us
            </button>
          </a>
          <a href="#contactUs">
            <button className="hover:scale-125 sm:px-4 sm:py-2 p-2">
              Contact us
            </button>
          </a>
        </div>
        <div className="sm:hidden">
          <button onClick={handleToggleMenu} className="text-black">
            <SlMenu size={24} />
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 w-64 bg-slate-50 text-black shadow-lg z-50 sm:hidden transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-transform duration-300`}
      >
        <div className="p-4">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={handleToggleMenu}
          >
            Home
          </a>
          <a
            href="#products"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={handleToggleMenu}
          >
            Products
          </a>
          <a
            href="#aboutUs"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={handleToggleMenu}
          >
            About us
          </a>
          <a
            href="#contactUs"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={handleToggleMenu}
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
