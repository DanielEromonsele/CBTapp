import React from "react";

const Register = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="h-[400px] w-[400px] border rounded-md  ">
        <div className="text-3xl text-green-900">Register</div>
        <form action="Submit" className="m-3">
          <div className="w-full h-[20px] border-green-500 my-8">
            NAME
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[45px] rounded-sm border pl-3"
            />
          </div>
          <div className=" h-[20px] border-green-500 my-8 py-6">
            Email
            <input
              type="Email"
              placeholder="email"
              className="w-full h-[45px] rounded-sm border pl-3"
            />
          </div>
          <div className="w-full h-[20px] border-green-500 my-8 py-6">
            Phone Number
            <input
              type="phone number"
              placeholder="Phone Number"
              className="w-full h-[45px] rounded-sm border pl-3"
            />
          </div>
          <br />
          <button className="w-full h-[45px] bg-blue-700 flex items-center justify-center mt-6 rounded-sm pl-3 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
