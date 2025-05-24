import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="image-container">
        <img
          className="background-image"
          src="/hero.jpeg"
          alt="travel img"
        ></img>
      </div>
      <div className="image-text">
        <h1>Discover Your Next Adventure</h1>
        <h4>Book your dream vacation today</h4>
      </div>
    </div>
  );
};

export default Hero;
