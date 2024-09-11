import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-contents">
          <h2>Order Your favorite food here</h2>
          <p>Choose from a diverse menu feauturing all kinds of dishes</p>
          <button>view menu</button>
        </div>
        <img
          className="hero-bg-img"
          src={`${process.env.PUBLIC_URL}/hero_img.png`}
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
