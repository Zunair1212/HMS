import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const switchForm = () => {
    setIsSignup(!isSignup);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            Home<span>Services</span>
          </Link>

          {/* Hamburger Icon */}
          <div className="nav-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Nav Links */}
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button
                className="nav-btn"
                onClick={() => {
                  setMenuOpen(false);
                  setShowForm(true);
                  setIsSignup(true); // default open Signup first
                }}
              >
                Login / Signup
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal Form */}
      {showForm && (
        <div className="navlogin-modal">
          <div className="navlogin-modal-content">
            <span className="navlogin-close" onClick={toggleForm}>
              &times;
            </span>
            <h2>{isSignup ? "Signup" : "Login"}</h2>
            <form className="navlogin-form">
              {isSignup && (
                <div className="navlogin-input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
              )}
              <div className="navlogin-input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="navlogin-input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="navlogin-submit">
                {isSignup ? "Signup" : "Login"}
              </button>
            </form>
            <p className="navlogin-switch">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <span onClick={switchForm}>Login</span>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <span onClick={switchForm}>Signup</span>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
