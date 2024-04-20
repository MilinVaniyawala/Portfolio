import React from "react";
import heroImage from "./hero_image.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        className="img-fluid hero-image"
        src={heroImage}
        alt="People sitting down near table with assorted laptop computers"
      />

      <h1 className="display-4 animated-text">Web Developer</h1>
    </section>
  );
};

export default HeroSection;
