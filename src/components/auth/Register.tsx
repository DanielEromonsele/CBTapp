import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Online test-bro.png";

const Register = () => {
  return (
    <div className="bg-green-400 min-h-screen w-full flex items-center justify-center">
      <div className="min-w-[70%] h-[750px] border bg-white">
        <div className="m-8 flex flex-wrap items-center justify-between h-[70px]">
          <div>
            <h1 className="text-[20px] font-semibold">
              Open <span className="text-green-600 font-semibold">Test</span>
            </h1>
          </div>
          <Link to="/auth/login">
            <div className="text-[20px] text-green-600 font-semibold border border-green-600 px-4 py-2 flex items-center justify-center rounded-lg">
              Sign In
            </div>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between m-10 mt-8 gap-6 lg:gap-0">
          <div className="w-full lg:w-[48%] min-h-[450px] flex flex-col justify-center">
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
                className="w-full my-4 h-[50px] rounded-lg text-gray-600 font-semibold border pl-3 border-gray-400 bg-white outline-none focus:ring-green-400 focus:ring-2 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full my-4 h-[50px] rounded-lg border text-gray-600 font-semibold pl-3 border-gray-400 bg-white outline-none focus:ring-green-400 focus:ring-2 transition-all duration-300"
              />
              <input
                type="password"
                placeholder="Input Password"
                className="w-full my-4 h-[50px] rounded-lg text-gray-600 font-semibold border pl-3 border-gray-400 bg-white outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
              />
              <button className="w-full h-[50px] bg-green-400 flex items-center justify-center rounded-lg pl-3 text-white transition-all duration-300 text-[20px] font-semibold hover:scale-105">
                Register
              </button>
              <button className="w-full h-[50px] bg-red-400 flex items-center justify-center rounded-lg pl-3 text-white transition-all duration-300 text-[20px] font-semibold hover:scale-105 mt-3">
                Sign In With Google
              </button>
            </form>
          </div>

          <div
            className="w-full lg:w-[47%] min-h-[300px] lg:min-h-[450px] bg-cover bg-center"
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
