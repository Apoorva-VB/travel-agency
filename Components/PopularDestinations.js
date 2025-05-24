import React from "react";
import "./Popular.css";

const PopularDestinations = () => {
  return (
    <section className="popular-section">
      <h2 className="section-title">Popular Destinations</h2>
      <div className="destination-grid">
        <div className="destination-card">
          <img src="/img1.jpeg" alt="Switzerland" />
          <h4>Switzerland</h4>
          <p>₹1,20,000 • ⭐ 4.9</p>
        </div>
        <div className="destination-card">
          <img src="/img2.jpg" alt="Paris" />
          <h4>Paris, France</h4>
          <p>₹95,000 • ⭐ 4.8</p>
        </div>
        <div className="destination-card">
          <img src="/img3.jpeg" alt="Rome" />
          <h4>Rome, Italy</h4>
          <p>₹85,000 • ⭐ 4.7</p>
        </div>
        <div className="destination-card">
          <img src="/img4.jpeg" alt="Amsterdam" />
          <h4>Spain,Itely</h4>
          <p>₹82,000 • ⭐ 4.5</p>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
