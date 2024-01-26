import React from "react";
import Navbar from "../../components/Navbar";
import Search from "./components/Search";

const Store = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 left-0 z-50">
        <Navbar />
      </div>
      <img
        src="./images/store.jpg"
        alt="store"
        className="h-screen w-full saturate-150"
      />
      <div className="absolute top-0 right-0 left-0 z-10 mt-24"></div>
      <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-center h-screen">
        <p className="text-white text-4xl font-semibold text-center">
          Your Health, Our Priority - Your Trusted Destination for Quality
          Medications and Wellness Essentials!
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center mt-10">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Store;
