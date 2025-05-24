// Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Alice Johnson",
    feedback: "Amazing tours and friendly guides! Highly recommend.",
    rating: 5,
  },
  {
    name: "Mark Smith",
    feedback: "Great experience, very professional and affordable.",
    rating: 4,
  },
  {
    name: "Sophie Lee",
    feedback: "Loved the itinerary and customer service was top-notch!",
    rating: 5,
  },
  {
    name: "Mark Jacob",
    feedback: "Great experience, very professional and affordable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map(({ name, feedback, rating }, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{feedback}"</p>
            <p className="name">- {name}</p>
            <p className="rating">
              {"⭐".repeat(rating)}{" "}
              <span className="rating-number">({rating}/5)</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
