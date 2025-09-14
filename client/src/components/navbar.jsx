import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          My<span>Website</span>
        </Link>

        {/* Menu */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button className="nav-btn" onClick={onLoginClick}>
              Login / Signup
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="nav-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
