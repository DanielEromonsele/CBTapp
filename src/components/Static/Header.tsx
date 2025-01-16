import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[50px] bg-white-500 flex items-center justify-center">
      <div className="w-[97%] h-full bg-white flex items-center justify-between">
        <div className="text-black text-[50px]">Novuss</div>
        <Link to="/auth/register">
          <div className="w-[180px] h-[40px] text-[20px] font-semibold bg-green-400 text-white rounded-lg flex items-center justify-center hover:rounded-tr-full hover:rounded-bl-full transition-all duration-700 cursor-pointer hover:scale-105">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
