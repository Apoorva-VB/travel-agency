import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-dark">
      <div className="navbar-dark__container">
        <Link
          to="/"
          className={`navbar-dark__link ${
            location.pathname === "/" ? "navbar-dark__link--active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`navbar-dark__link ${
            location.pathname === "/about" ? "navbar-dark__link--active" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`navbar-dark__link ${
            location.pathname === "/contact" ? "navbar-dark__link--active" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
