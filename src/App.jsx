import React from "react";
import { Routes, Route } from "react-router-dom";
import Front from "./pages/Front/Front";
import Signup from "./pages/Signup/Signup";
import UserLog from "./pages/Login/User/UserLog";
import DoctorLog from "./pages/Login/Doctor/DoctorLog";
import About from "./pages/About/About";
import Store from "./pages/Store/Store";
import VideoChat from "./pages/VideoChat/VideoChat";
import Room from "./pages/VideoChat/Room";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Front} />
        <Route path="/login" Component={UserLog} />
        <Route path="/signup" Component={Signup} />
        <Route path="/doclog" Component={DoctorLog} />
        <Route path="/about" Component={About} />
        <Route path="/store" Component={Store} />
        <Route path="/videochat" Component={VideoChat} />
        <Route path="/room/:room" Component={Room} />
      </Routes>
    </div>
  );
};

export default App;
