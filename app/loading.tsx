//TODO: To generate an animation that depicts loading when in need of API access or network issues for what ever reason.
"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/loading.json";
const Loading = () => {
  return (
    <div className="pt-20">
      <div className="max-w-screen-md max-h-screen mx-auto">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
