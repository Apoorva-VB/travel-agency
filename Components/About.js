import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted partner in unforgettable journeys.</p>
      </header>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, we have been passionate about connecting travelers
          with unique experiences worldwide. Our mission is to make travel
          accessible, fun, and memorable for everyone.
        </p>
        <p>
          We handpick every destination and tour to ensure top quality and
          unforgettable moments. Your adventure is our priority.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          We strive to create transformative travel experiences that go beyond
          sightseeing. We envision a world where travel fosters connection,
          growth, and cultural appreciation.
        </p>
      </section>
    </div>
  );
};

export default About;
