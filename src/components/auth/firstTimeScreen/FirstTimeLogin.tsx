import { useState } from "react";
import { useNavigate } from "react-router-dom";

document.title = "First Time | CBT";

const FirstTimeLogin = () => {
  return (
    <div className="w-full smooth h-screen flex justify-center items-center bg-green-500">
      <div className="w-[95%] min-h-[80%] border-2 shadow-sm border-indigo-50 lg:w-[87%] xl:w-[75%] lg:h-[85%] rounded-[17px] bg-white flex justify-center items-center">
        <div className="w-[98%] h-[97%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="h-full backimg hidden lg:block border bg-indigo-50 rounded-[8px]"></div>
          <div className="h-full col-span-2 p-[30px]">
            <div className="h-full flex justify-start items-start flex-col">
              <div className="w-full mb-[60px] flex justify-start items-center gap-3">
                <div className="border h-[20px] w-[20px] bg-indigo-800 rounded-full" />
                <div className="border h-[20px] w-[20px] rounded-full" />
                <div className="border h-[20px] w-[20px] rounded-full" />
              </div>
              <div className="text-indigo-800">
                <h1 className="font-semibold text-[25px]">
                  Provide information
                </h1>
                <p className="font-medium">
                  Please fill the fields below with your contact details.
                </p>
              </div>

              <div className="w-full">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-[#3c3c3b]">
                  <div className="mt-10 mb-5">
                    <label htmlFor="companytext" className="text-[18px]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companytext"
                      name="text"
                      placeholder="Octa Consolidated Nigeria"
                      required
                    />
                  </div>
                  <div className="md:mt-10">
                    <label htmlFor="companytxt" className="text-[18px]">
                      Company Address
                    </label>
                    <input
                      type="text"
                      id="companytxt"
                      name="text"
                      placeholder="14, Admiralty Way Lekki, Lagos"
                      required
                    />
                  </div>
                  {/* State Select */}
                </div>
                <div className="w-full col-span-2"></div>
              </div>
              <div className="flex-1" />
              <div className="w-full flex justify-end items-center">
                <button className="py-3 px-4 border bg-indigo-800 text-white text-[16px] rounded-[8px] hover:scale-100 transition-all duration-300"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeLogin;
