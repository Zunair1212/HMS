import React, { useEffect, useState } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBroom, FaToilet, FaBolt, FaPaintRoller, FaTools } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [showForm, setShowForm] = useState(false);

  const teamMembers = [
    { name: "Sana Khan", role: "Founder & CEO", img: "abt1.jpg" },
    { name: "Ali Raza", role: "Operations Manager", img: "abt2.jpg" },
    { name: "Malik Areeba ", role: "Head Technician", img: "abt3.jpg" },
    { name: "Hussain Khakwani", role: "Customer Relations", img: "abt4.jpg" },
  ];

  const timeline = [
    { year: "2023", event: "Company Founded" },
    { year: "2023", event: "Served 500+ Happy Clients" },
    { year: "2024", event: "Expanded Services Nationwide" },
    { year: "2025", event: "Awarded Best Home Service Provider" },
  ];

  const services = [
    { icon: <FaBroom />, title: "Cleaning" },
    { icon: <FaToilet />, title: "Plumbing" },
    { icon: <FaBolt />, title: "Electrical" },
    { icon: <FaPaintRoller />, title: "Painting" },
    { icon: <FaTools />, title: "Repairing" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your service has been booked successfully!");
    setShowForm(false);
  };

  return (
    <div className="aboutpage">

      <ToastContainer />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>
        <div className="about-overlay">
          <h1 data-aos="fade-up">Your Trusted Home Services Partner</h1>
          <p data-aos="fade-up" data-aos-delay="150">
            Delivering safe, clean, and reliable services to make every home comfortable and efficient.
          </p>
          <button
            className="btn-primary"
            data-aos="fade-up" 
            data-aos-delay="300"
            onClick={() => setShowForm(true)}
          >
            Book a Service Now
          </button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-overview" data-aos="fade-up">
        <div className="overview-container flex-overview">
          <div className="overview-image">
            <img src="abouthero.jpg" alt="Company Overview" />
          </div>
          <div className="overview-text">
            <h2>Our Mission & Vision</h2>
            <p>
              We provide professional, reliable, and affordable home services to make your life easier and your home safer.
            </p>
            <p>
              Our vision is to be the most trusted home services provider nationwide, known for excellence, reliability, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline" data-aos="fade-up">
        <h2>Our Journey</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-event">{item.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team" data-aos="fade-up">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="about-services" data-aos="fade-up">
        <div className="services-bg-shapes">
          <span className="shape s1"></span>
          <span className="shape s2"></span>
          <span className="shape s3"></span>
        </div>
        <h2>Our Expertise</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-testimonials" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card" data-aos="fade-up">
            <p>"Amazing service! The team is punctual, professional, and skilled. Highly recommended!"</p>
            <h4>- Ali R.</h4>
          </div>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="150">
            <p>"Booking was easy, and the staff did an incredible job cleaning our home. Excellent experience!"</p>
            <h4>- Sana K.</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" data-aos="fade-in">
        <h2>Ready to Experience Top-Quality Home Services?</h2>
        <button className="btn-primary" onClick={() => setShowForm(true)}>Book a Service Now</button>
      </section>

      {/* Book Now Form Modal */}
      {showForm && (
        <div className="form-modal">
          <div className="form-content">
            <span className="close-btn" onClick={() => setShowForm(false)}>&times;</span>
            <h2>Book Your Service</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Service</option>
                {services.map((service, i) => (
                  <option key={i} value={service.title}>{service.title}</option>
                ))}
              </select>
              <textarea placeholder="Additional Notes" rows="4"></textarea>
              <button type="submit" className="btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;
