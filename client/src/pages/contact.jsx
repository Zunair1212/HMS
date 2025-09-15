import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Submitted Successfully! Wait for response.", {
      position: "top-center",
      autoClose: 3000,
    });
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Get in touch with us today!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>📍 123 Main Street, Multan, Pakistan</p>
            <p>📞 +92 300 1234567</p>
            <p>📧 contact@example.com</p>
            <div className="social-icons">
              <a href="#">🌐</a>
              <a href="#">🐦</a>
              <a href="#">📘</a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="home-cleaning">Home Cleaning</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="painting">Painting</option>
                <option value="carpentry">Carpentry</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
