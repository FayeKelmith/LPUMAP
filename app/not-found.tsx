"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/error.json";

const NotFound = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center text-4xl my-10">
        Ooop! <br />
        Page Not Found
      </h1>

      <div className="max-w-xl mx-auto">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h3 className="text-3xl my-4 text-center">Please refresh</h3>
      <h3 className="bg-blue-500 px-8 py-2 rounded-sm shadow-md w-fit mx-auto text-blue-100 text-xl">
        Reset
      </h3>
    </div>
  );
};

export default NotFound;
