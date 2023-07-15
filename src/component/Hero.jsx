import React from "react";
// import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between  items-center py-[66px] font-medium ">
        <div className="md:w-[60%] w-full">
          <p className="text-[#4D4D4D] text-lg my-[30px] tracking-wider ">
            Where to grow your business as a photographer site or social media?
          </p>
          <h1 className="text-[#4D4D4D] font-extrabold text-[44.548px] my-[30px] tracking-wider ">
            Lessons and insights{" "}
            <span className="text-[#4CAF4F]">
              {" "}
              <br /> from 8 years
            </span>
          </h1>
          <button
            type="button"
            className="bg-green-500 p-3 rounded-md text-white w-[150px]  "
          >
            Register
          </button>
        </div>
        <div className="md:w-[40%] w-full">
          {" "}
          <img src="/Images/illustration.png" alt="illustration" className="h-full w-full " />
        </div>
      </div>{" "}
      <div className="flex justify-center">
        <img src="/Images/Dot.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
