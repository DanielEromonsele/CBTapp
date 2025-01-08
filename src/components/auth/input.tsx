import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Online test-bro.png";

const Register = () => {
  return (
    <div className="bg-green-400 h-screen w-full flex items-center justify-center">
      <div className="min-w-[70%] h-[750px] border bg-white">
        <div className="bg-blue-400 m-8 h-[70px]">hhg</div>
        <div className=" flex items-center justify-between m-10 mt-8 min-h-[500px]">
          <div className="w-[48%]  min-h-[450px] flex  flex-col justify-center">
            <div className="text-[40px] text-green-500 font-semibold">
              Register
            </div>
            <div className="text-[20px] text-gray-400 font-semibold">
              Sign up to get started
            </div>
            <form action="Submit" className="m-3">
              <input
                type="text"
                placeholder="Insert Your Name"
                className="w-full my-8 h-[50px] rounded-lg text-gray-600 font-semibold border pl-3 border-gray-400 bg-white outline-none focus:ring-green-400 focus:ring-2 transition-all duration-700"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-[50px] rounded-lg border text-gray-600 font-semibold pl-3 border-gray-400 bg-white outline-none focus:ring-green-400 focus:ring-2 transition-all duration-700"
              />
              <input
                type="password"
                placeholder="Input Password"
                className="w-full my-8 h-[45px] rounded-lg text-gray-600 font-semibold border pl-3 border-gray-400 bg-white outline-none focus:ring-2 focus:ring-green-400 transition-all duration-700"
              />
              <br />
              <button className="w-full h-[50px] bg-green-400 flex items-center justify-center rounded-lg pl-3 text-white transition-all duration-700  text-[20px] font-semibold hover:scale-105">
                Register
              </button>
            </form>
          </div>
          <div
            className="w-[47%] min-h-[450px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
