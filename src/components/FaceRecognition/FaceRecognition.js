import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ image, box }) => {
  return (
    <div className="flex justify-center">
      <div className="absolute">
        <img id="inputImage" src={image} width="500px" height="auto" alt="" />

        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
        <div className={`white tc ${box.name ? "celebrity" : ""}`}>
          {box.name}
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
