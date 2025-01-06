import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-green-400 h-screen w-full flex items-center justify-center">
      <div className="w-[70%] h-[600px] border bg-white">
        <div className="m-10 flex items-center justify-between">
          <div>
            <h1 className="text-[20px] font-semibold">
              Open <span className="text-green-600 font-semibold">Test</span>
            </h1>
          </div>
          <Link to="/auth/login">
            <div className="text-[20px] text-green-600 font-semibold w-[100px] border border-green-600 h-20px flex items-center justify-center rounded-lg">
              Sign In
            </div>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Register;
