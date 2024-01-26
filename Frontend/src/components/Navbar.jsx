import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-2xl text-white">
      <div>Logo</div>
      <div>
        <ul className="flex">
          <li className="mr-6 p-2">
            <Link to="/" className="tracking-widest">
              Home
            </Link>
          </li>
          <li className="mr-6 p-2">
            <Link to="/about" className="tracking-widest">
              About
            </Link>
          </li>
          <li className="mr-6 bg-blue-700 p-2 rounded-md text-white hover:bg-blue-600 transition-all">
            <Link to="/login" className="tracking-widest">
              Log In
            </Link>
          </li>
          <li className="mr-6 bg-blue-700 p-2 rounded-md text-white hover:bg-blue-600 transition-all">
            <Link to="/signup" className="tracking-wider">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
