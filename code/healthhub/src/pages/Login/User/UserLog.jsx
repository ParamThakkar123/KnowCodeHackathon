import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  signInSuccess,
  signInStart,
  signInFailure,
} from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../../../components/OAuth";

const UserLog = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      dispatch(signInSuccess(data));
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-3 text-center">Log In for Users</h1>
        <div>
          <label for="email" className="text-2xl">
            Email:{" "}
          </label>
          <br />
          <input
            type="email"
            id="email"
            onChange={handleChange}
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
            onChange={handleChange}
            className="border-solid border-black border-2 mt-2 w-full rounded-md p-1"
          />
        </div>
        <div className="flex items-center justify-center mt-5 mb-3 text-xl bg-blue-700 rounded-md p-2 text-white hover:bg-blue-600 transition-all">
          <button type="submit">{loading ? "Loading..." : "Log In"}</button>
        </div>
        <hr />
        <OAuth />
        <div className="mt-5">
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
        </div>
        <p>{error ? error.message || "Something Went Wrong" : ""}</p>
      </form>
    </div>
  );
};

export default UserLog;
