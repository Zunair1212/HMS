import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-col">
          <h2 className="footer-logo">Home<span>Services</span></h2>
          <p className="footer-about">
            We provide reliable and affordable home services including cleaning, plumbing, 
            electrical, painting, and other much more solutions. 
            Your comfort is our priority.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/service">Plumbing</a></li>
            <li><a href="/service">Electrical</a></li>
            <li><a href="/service">Cleaning</a></li>
            <li><a href="/service">Painting</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 123 Main Street, Multan, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉ support@homeservices.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HomeServices. All Rights Reserved. This Website Is Made By Zunair Fatima</p>
      </div>
    </footer>
  );
};

export default Footer;
