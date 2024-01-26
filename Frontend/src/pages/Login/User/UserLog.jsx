import React from "react";
import { Link } from "react-router-dom";

const UserLog = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <h1 className="text-3xl mb-3 text-center">Log In for Users</h1>
        <div>
          <label for="email" className="text-2xl">
            Email:{" "}
          </label>
          <br />
          <input
            type="email"
            id="email"
            className="border-solid border-black border-2 mt-2 rounded-md p-1 w-full"
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
            className="border-solid border-black border-2 mt-2 w-full rounded-md p-1"
          />
        </div>
        <div className="flex items-center justify-center mt-5 mb-3 text-xl bg-blue-700 rounded-md p-2 text-white hover:bg-blue-600 transition-all">
          <button type="submit">Submit</button>
        </div>
        <p className="text-xl">
          If you are a doctor,{" "}
          <Link to="/doclog" className="text-blue-800">
            click here to login
          </Link>
        </p>
        <p className="mt-2 text-xl">
          New on this website ?{" "}
          <Link to="/signup" className="text-blue-800">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default UserLog;
