import React, { useEffect, useState } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import heroVideo from "../assets/hero-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLaptop, FaTruck, FaCheckCircle, FaTools, FaBroom, FaToilet, FaBolt, FaPaintRoller } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: false });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false });
  const { ref: expertsRef, inView: expertsInView } = useInView({ triggerOnce: false });

  const testimonials = [
    { name: "Ali Raza", text: "Amazing service! The team arrived on time and completed everything professionally.", img: "https://i.pravatar.cc/100?img=1" },
    { name: "Sana Khan", text: "Very satisfied with the cleaning service. Booking was super easy and hassle-free!", img: "https://i.pravatar.cc/100?img=2" },
    { name: "John Smith", text: "Highly recommend! Their electricians solved my issue within an hour. Excellent support.", img: "https://i.pravatar.cc/100?img=3" },
  ];

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
  });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Submitted! Please wait for confirmation.");
    setFormData({ name: "", email: "", phone: "", address: "", service: "" });
    setShowForm(false);
  };

  return (
    <div className="homepage">
      <ToastContainer />

      {/* Hero Section */}
      <section className="hero" data-aos="fade-in">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Your Trusted Home Services Partner</h1>
          <p>Reliable, Professional, Affordable – All in One Place.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="form-modal">
          <div className="form-overlay" onClick={() => setShowForm(false)}></div>
          <div className="form-content">
            <span className="form-close" onClick={() => setShowForm(false)}>&times;</span>
            <h2>Book Your Service</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
              <select name="service" value={formData.service} onChange={handleInputChange} required>
                <option value="">Select Service</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Painting">Painting</option>
                <option value="Furniture Assembly">Furniture Assembly</option>
              </select>
              <div className="form-buttons">
                <button type="submit" className="btn-primary">Submit</button>
                <button type="button" className="btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Trusted By */}
      <section className="trusted-by" data-aos="fade-up">
        <h2>Trusted By</h2>
        <div className="logos">
          <img src="trust.webp" alt="client" />
          <img src="trust1.jpg" alt="client" />
          <img src="trust2.png" alt="client" />
          <img src="trust3.webp" alt="client" />
        </div>
      </section>

      {/* Services */}
      <section className="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="cards-grid">
          <div className="service-card" data-aos="zoom-in">
            <FaBroom />
            <h3>Cleaning</h3>
            <p>Professional home & office cleaning services.</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
            <FaToilet />
            <h3>Plumbing</h3>
            <p>Reliable plumbing solutions anytime.</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <FaBolt />
            <h3>Electrical</h3>
            <p>Certified electricians for all needs.</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
            <FaPaintRoller />
            <h3>Painting</h3>
            <p>Quality painting to refresh your home.</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
            <FaTools />
            <h3>Furniture Assembly</h3>
            <p>Expert assembly for all types of furniture at your home.</p>
            <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" data-aos="fade-up">
        <h2 data-aos="fade-up">How It Works</h2>
        <div className="steps">
          <div className="step" data-aos="fade-up">
            <div className="step-icon"><FaLaptop /></div>
            <h3>1. Book Online</h3>
            <p>Choose your service & schedule easily from our website or app.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="150">
            <div className="step-icon"><FaTruck /></div>
            <h3>2. We Arrive</h3>
            <p>Our professionals arrive on time with all necessary tools.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="300">
            <div className="step-icon"><FaCheckCircle /></div>
            <h3>3. Get It Done</h3>
            <p>Enjoy hassle-free, high-quality service completed efficiently.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics" data-aos="fade-in">
        <div className="stat" ref={clientsRef} data-aos="zoom-in">
          <h2>{clientsInView ? <CountUp start={0} end={1500} duration={3} separator="," /> : 0}+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="stat" ref={projectsRef} data-aos="zoom-in" data-aos-delay="200">
          <h2>{projectsInView ? <CountUp start={0} end={2500} duration={3} separator="," /> : 0}+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat" ref={expertsRef} data-aos="zoom-in" data-aos-delay="400">
          <h2>{expertsInView ? <CountUp start={0} end={200} duration={3} separator="," /> : 0}+</h2>
          <p>Experts</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <p className="testimonial-text">“{t.text}”</p>
                <h4 className="testimonial-name">- {t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" data-aos="fade-in">
        <h2>Book a Service Today – 20% Off First Order</h2>
        <button className="btn-primary" onClick={() => setShowForm(true)}>Book Now</button>
      </section>
    </div>
  );
};

export default Home;
