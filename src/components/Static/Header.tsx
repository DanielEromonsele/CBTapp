import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[80px] fixed top-0 transition-all duration-500 flex items-center justify-center ${
        scrolling ? "bg-gray-900 shadow-lg" : "bg-white shadow-md"
      }`}
    >
      <div className="w-[95%] h-full flex items-center justify-between px-6">
        <div
          className={`text-[50px] font-bold drop-shadow-md transition-all duration-500 ${
            scrolling ? "text-white" : "text-black"
          }`}
        >
          Novuss
        </div>
        <Link to="/auth/register">
          <div className="w-[180px] h-[40px] text-[20px] font-semibold bg-green-400 text-white rounded-lg flex items-center justify-center hover:rounded-tr-full hover:rounded-bl-full transition-all duration-700 cursor-pointer hover:scale-105 shadow-md">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
