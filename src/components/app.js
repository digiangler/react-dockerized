import React from "react";

import dockerImg from "../assets/docker.png";
import reactImg from "../assets/react.png";

import "./app.css";

function AppComponent() {
  return (
    <div className="container">
      <img src={reactImg} alt="reactImg" className="reactImg" />
      <h1 className="title">I LOVE REACT & DOCKER</h1>
      <img src={dockerImg} alt="dockerImg" className="dockerImg" />
    </div>
  );
}

export default AppComponent;
