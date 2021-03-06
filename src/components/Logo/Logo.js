import React from "react";
import Tilt from "react-tilt";
import brain from "../Logo/brain.png"

const Logo = () => {
  return (
    <div className="mt0 ma4" style={{ display: "inline-block" }}>
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
  );
};

export default Logo;
