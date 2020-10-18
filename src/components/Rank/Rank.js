import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div className="white f2">{name}, your current rank is...</div>
      <div className="white f1">#{entries}</div>
    </div>
  );
};

export default Rank;
