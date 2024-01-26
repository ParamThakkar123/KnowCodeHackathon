import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Search from "./components/Search";

const Store = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.fda.gov/drug/drugsfda.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item, index) => {
              <li key={index}>{item.products}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Store;
