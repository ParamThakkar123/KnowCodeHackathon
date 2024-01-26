import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form action="">
        <h1 className="text-center text-4xl mb-5">Sign Up</h1>
        <div>
          <label for="name" className="text-2xl">
            Name:{" "}
          </label>
          <br />
          <input
            type="text"
            id="name"
            className="border-solid border-black border-2 mt-2 w-full text-lg p-2 rounded-md"
          />
        </div>
        <div className="mt-3">
          <label for="email" className="text-2xl">
            Email:{" "}
          </label>
          <br />
          <input
            type="email"
            id="email"
            className="border-solid border-black border-2 mt-2 w-full text-lg p-2 rounded-md"
          />
        </div>
        <div className="mt-3">
          <div className="mt-3">
            <label htmlFor="question" className="text-2xl">
              Are you a Doctor?
            </label>
            <br />
            <label htmlFor="doctorYes" className="text-xl mr-2 mt-2">
              Yes
            </label>
            <input
              type="radio"
              id="doctorYes"
              name="doctorOption"
              value="Yes"
            />
            <label htmlFor="doctorNo" className="text-xl ml-2 mr-2 mt-2">
              No
            </label>
            <input type="radio" id="doctorNo" name="doctorOption" value="No" />
          </div>
        </div>
        <div>
          <label for="password" className="text-2xl">
            Password:{" "}
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="border-solid border-black border-2 mt-2 w-full text-lg p-2 rounded-md"
          />
        </div>
        <div>
          <label for="confirmPassword" className="text-2xl">
            Confirm Password:{" "}
          </label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            className="border-solid border-black border-2 mt-2 w-full text-lg p-2 rounded-md"
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <button
            type="submit"
            className="bg-blue-700 text-white text-xl p-2 w-full rounded-md"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
