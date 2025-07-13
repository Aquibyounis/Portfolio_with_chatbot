import React, { useState, useEffect } from "react";
import "../Load/LiquidLoader.css";

const LiquidLoader = () => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev > 1 ? prev - 1 : 1));
    }, 25); // 100 to 1 in 3 seconds = 100 values / 3 sec = 33ms approx

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="liquid-bar">
        <div
          className="liquid"
          style={{ height: `${(100 - count)}%` }} // Liquid fill effect
        >
        </div>
      </div>
      <h2 className="loader-text">
        {count > 1 ? `Launching in ${count}...` : "Ready to Launch👩🏻‍🚀🚀"}
          <h1>RE FUELING</h1>
      </h2>
    </div>
  );
};

export default LiquidLoader;
