import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  signInSuccess,
  signInStart,
  signInFailure,
} from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const DoctorLog = () => {
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
      const response = await fetch("/api/auth/doctor", {
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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl mb-3">Log In for Doctors</h1>
        <div>
          <label for="email" className="text-2xl">
            Email:{" "}
          </label>
          <br />
          <input
            type="email"
            id="email"
            onChange={handleChange}
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
            onChange={handleChange}
            className="border-solid border-black border-2 mt-2 w-full text-xl p-2 rounded-md"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-3 bg-blue-700 p-2 w-full text-white rounded-md"
          >
            <button type="submit">{loading ? "Loading..." : "Log In"}</button>
          </button>
        </div>
        <hr />
        <div className="mt-5">
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-3 bg-blue-700 p-2 w-full text-white rounded-md"
            >
              Sign in with Google
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-3 bg-blue-700 p-2 w-full text-white rounded-md"
            >
              Sign in with Facebook
            </button>
          </div>
          <p>{error ? error.message || "Something Went Wrong" : ""}</p>
        </div>
      </form>
    </div>
  );
};

export default DoctorLog;
