import React from "react";
import Tilt from "react-tilt";
import brain from "../Logo/brain.png";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <div className="flex justify-between">
      <div className="ma1" style={{ display: "inline-block" }}>
        <Tilt
          className="Tilt"
          options={{ max: 55 }}
          style={{ height: 170, width: 170 }}
        >
          <div className="Tilt-inner pa3">
            <img src={brain} alt="logo"></img>
          </div>
        </Tilt>
      </div>
      {isSignedIn ? (
        <nav style={{ display: "flex" }} className="ma4">
          <div
            onClick={() => onRouteChange("signin")}
            className="f3 pa3 dim black pointer"
          >
            Sign out
          </div>
        </nav>
      ) : (
        <nav style={{ display: "flex" }} className="ma4">
          <div
            onClick={() => onRouteChange("signin")}
            className="f3 pa3 dim black pointer"
          >
            Sign In
          </div>

          <div
            onClick={() => onRouteChange("register")}
            className="f3 pa3 dim black pointer"
          >
            Register
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
