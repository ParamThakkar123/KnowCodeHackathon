import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-36">
          <h1 className="text-5xl text-center">Profile</h1>
          <div className="flex items-center justify-center">
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-40 w-40 mt-10 rounded-full cursor-pointer"
            />
          </div>
          <div className="text-center mt-10 flex items-center justify-center gap-5">
            <h1 className="text-2xl">User Name : </h1>
            <h2 className="text-xl">{currentUser.username}</h2>
          </div>
          <div className="text-center mt-10 flex items-center justify-center gap-5">
            <h2 className="text-2xl">Email : </h2>
            <h2 className="text-xl">{currentUser.email}</h2>
          </div>

          <div className="flex items-center justify-center mt-5">
            <button className="bg-pink-500 w-1/4 mt-4 p-3 text-xl rounded-lg hover:scale-110 transition-all duration-300">
              <Link to="/update">Update Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
