import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import heroVideo from "../assets/hero-video.mp4"; // ✅ video file
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // ✅ Counters with re-trigger
  const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: false });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false });
  const { ref: expertsRef, inView: expertsInView } = useInView({ triggerOnce: false });

  const testimonials = [
    {
      name: "Ali Raza",
      text: "Amazing service! The team arrived on time and completed everything professionally.",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Sana Khan",
      text: "Very satisfied with the cleaning service. Booking was super easy and hassle-free!",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "John Smith",
      text: "Highly recommend! Their electricians solved my issue within an hour. Excellent support.",
      img: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" data-aos="fade-in">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Your Trusted Home Services Partner</h1>
          <p>Reliable, Professional, Affordable – All in One Place.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Book Now</button>
            
          </div>
        </div>
      </section>

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
        <div className="cards-grid center-grid">
          <div className="service-card" data-aos="zoom-in">
            <h3>Cleaning</h3>
            <p>Professional home & office cleaning services.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Plumbing</h3>
            <p>Reliable plumbing solutions anytime.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Electrical</h3>
            <p>Certified electricians for all needs.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Painting</h3>
            <p>Quality painting to refresh your home.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 data-aos="fade-up">How It Works</h2>
        <div className="steps">
          <div className="step" data-aos="slide-up">
            <h3>1. Book Online</h3>
            <p>Choose your service & schedule easily.</p>
          </div>
          <div className="step" data-aos="slide-up" data-aos-delay="150">
            <h3>2. We Arrive</h3>
            <p>Our professionals arrive on time.</p>
          </div>
          <div className="step" data-aos="slide-up" data-aos-delay="300">
            <h3>3. Get It Done</h3>
            <p>Enjoy hassle-free, high-quality service.</p>
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
        <button className="btn-primary">Book Now</button>
      </section>
    </div>
  );
};

export default Home;
