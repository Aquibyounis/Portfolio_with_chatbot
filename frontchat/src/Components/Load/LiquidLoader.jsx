import React from "react";
import "../Load/LiquidLoader.css";

const LiquidLoader = () => {
  return (
    <div className="loader-container">
      <div className="liquid-bar">
        <div className="liquid"></div>
      </div>
      <h2 className="loader-text">Launching your experience...</h2>
    </div>
  );
};

export default LiquidLoader;
