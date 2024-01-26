import React from "react";
import Navbar from "../../components/Navbar";
import Features from "./Features";
import Health from "./Health";

const Front = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 right-0 left-0 z-50">
        <Navbar />
      </div>
      <img
        src="./images/healthcare.jpg"
        alt="healthcare"
        className="w-full h-screen"
      />
      <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-center h-screen">
        <div className="text-white">
          <p className="text-center text-6xl font-semibold mb-5 mt-7">
            Welcome to Healthhub!
          </p>
          <span className="text-4xl font-semibold">
            A one stop solution to all your healthcare needs!
          </span>
          <br />
          <div className="mt-96">
            <p className="text-center text-white text-2xl font-semibold">
              Scroll down to explore
            </p>
          </div>
        </div>
      </div>
      <Health />
      <Features />
    </div>
  );
};

export default Front;
