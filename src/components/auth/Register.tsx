import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-green-400 h-screen w-full flex items-center justify-center">
      <div className="min-w-[70%] h-[750px] border bg-white">
        <div className="bg-blue-400 m-8 h-[70px]">hhg</div>
        <div className=" flex items-center justify-between m-10 mt-8 min-h-[500px]">
          <div className="w-[48%]  h-[400px] flex  flex-col justify-center">
            <div className="text-[40px] text-green-500 font-semibold">
              Register
            </div>
            <form action="Submit" className="m-3">
              <input
                type="text"
                placeholder="Insert Your Name"
                className="w-full my-8 h-[45px] rounded-lg text-gray-600 font-semibold border pl-3 border-gray-400 bg-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-[45px] rounded-lg border text-gray-600 font-semibold pl-3 border-gray-400 bg-white"
              />

              <input
                type=""
                placeholder="Insert Your Phone Number"
                className="w-full my-8 h-[45px] rounded-lg text-gray-600 font-semibold border pl-3 border-gray-400 bg-white"
              />

              <br />
              <button className="w-full h-[45px] bg-blue-700 flex items-center justify-center rounded-lg pl-3 text-white">
                Register
              </button>
            </form>
          </div>
          <div className="w-[47%] h-full bg-red-700">fff</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
