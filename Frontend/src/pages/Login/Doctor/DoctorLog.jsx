import React from "react";

const DoctorLog = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form>
        <h1 className="text-center text-3xl mb-3">Log In for Doctors</h1>
        <div>
          <label for="email" className="text-2xl">
            Email:{" "}
          </label>
          <br />
          <input
            type="email"
            id="email"
            className="border-solid border-black border-2 mt-2 w-full p-2 rounded-md text-xl"
          />
        </div>
        <div className="mt-2">
          <label for="password" className="text-2xl">
            Password:{" "}
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="border-solid border-black border-2 mt-2 w-full text-xl p-2 rounded-md"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-3 bg-blue-700 p-2 w-full text-white rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorLog;
