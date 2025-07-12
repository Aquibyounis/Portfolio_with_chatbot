import React from 'react';
import "./Github.css";
import vid from "../../assets/hero.mp4"; // Assuming you have a video file named hero.mp4 in the assets folder

const Github = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default Github;
