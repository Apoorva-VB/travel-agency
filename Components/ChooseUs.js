import React from "react";
import "./Choose.css";

const ChooseUs = () => {
  return (
    <div className="choose-container">
      <h2 className="choose-title">Why Choose Us?</h2>
      <div className="features">
        <div className="feature-card">
          <span className="icon">📞</span>
          <h4>24/7 Support</h4>
          <p>Always here when you need us.</p>
        </div>
        <div className="feature-card">
          <span className="icon">💰</span>
          <h4>Best Price Guarantee</h4>
          <p>Get the best deals every time.</p>
        </div>
        <div className="feature-card">
          <span className="icon">🌍</span>
          <h4>Handpicked Tours</h4>
          <p>Curated trips by travel experts.</p>
        </div>
        <div className="feature-card">
          <span className="icon">✅</span>
          <h4>Easy Booking</h4>
          <p>Hassle-free and fast process.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
