import React from "react";

const TeachingService = () => {
  return (
    <div className="h-[100vh] w-full bg-cyan-700 flex items-center justify-center">
      <div className="bg-green-300 h-full w-[95%] flex items-center justify-between">
        <div className="bg-blue-500 w-[48%] h-full flex flex-col justify-center p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 mt-20">
            Trustworthy And Efficient Exam Practice System.
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            excepturi odio voluptate quia nisi illum nulla libero quae
            recusandae.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow-md">
              📚
            </div>
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow-md">
              🎓
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-[50%] h-full flex items-center justify-center">
          <p className="text-white text-2xl">Image</p>
        </div>
      </div>
    </div>
  );
};

export default TeachingService;
