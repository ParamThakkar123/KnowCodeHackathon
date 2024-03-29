import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit} action="" className="">
          <h1 className="text-5xl uppercase tracking-wider text-center mt-10 mb-2">
            Sign up
          </h1>

          <div className="mt-2 pl-4 pr-4 pb-3">
            <span className="text-2xl">Username</span>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              id="username"
              className="mt-2 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl mr-40"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="mt-2 pl-4 pr-4 pb-3">
            <span className="text-2xl">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              className="mt-2 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl"
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="mt-2 pl-4 pr-4 pb-3">
            <span className="text-2xl">Password</span>
            <br />
            <div>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="mt-2 w-full bg-black text-white rounded-md p-2 border-solid border-2 border-white text-xl"
                onChange={handleChange}
              />
            </div>
            <br />
          </div>

          <div className="flex items-center justify-center p-4 ml-1">
            <button
              disabled={loading}
              type="submit"
              className="mt-2 text-white bg-gradient-to-r from-violet-600 to-pink-500 font-semibold w-full p-3 rounded-md text-xl hover:scale-110 transition-all duration-300"
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          </div>

          <p className="">{error && "Something went wrong"}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
