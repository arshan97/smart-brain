import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p className="f3">
        This magic brain will detect faces in your pictures. Give it a try!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "700px" }} className="pa2">
          <input
            className="f4 pa2 grow w-70 center"
            type="text"
            placeholder="Paste an image link"
            onChange={onInputChange}
          />
          <button
            onClick={onSubmit}
            className="w-20 ml3 grow f4 link pointer pv2 white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
