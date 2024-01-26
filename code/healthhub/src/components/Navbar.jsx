import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
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
          <li className="mr-6 p-2">
            <Link to="/store" className="tracking-widest">
              Store
            </Link>
          </li>
          <li>
            {currentUser ? (
              <div className="hidden lg:flex items-center uppercase text-2xl mr-5">
                <Link to="/profile">
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="item h-10 w-10 mr-4 rounded-full object-cover"
                  />
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center uppercase text-2xl">
                <Link
                  to="" // Add link to about page here.
                  className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  to="/login"
                  className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-colors duration-300 rounded-lg p-2"
                >
                  Sign up
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
