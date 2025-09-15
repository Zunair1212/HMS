import React, { useState } from "react";
import SidebarWithServices from "../components/sidebarwithservices";
import "./service.css";

const ServicesPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Our Services</h1>
          <p>Reliable and affordable solutions for your home & office</p>
        </div>
      </section>

      {/* Sidebar + Services */}
      <SidebarWithServices />

      {/* Banner Section */}
      <section className="services-banner">
        <div className="banner-content">
          <h2>Need a Professional Right Away?</h2>
          <p>Book your trusted service provider in just a few clicks.</p>
          <button onClick={() => setShowForm(true)} className="banner-btn">
            Book a Service
          </button>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Book a Service</h3>
            <form className="service-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              
              {/* Service Selection */}
              <select required>
                <option value="">Select a Service</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="cleaner">Cleaner</option>
                <option value="painter">Painter</option>
                <option value="furniture">Furniture Assembly</option>
                <option value="other">Other</option>
              </select>

              
              <textarea placeholder="Additional Details" rows="3"></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;





// import React from "react";
// import "./service.css";

// const categories = [
//   "Cleaning",
//   "Plumbing",
//   "Electrical",
//   "Painting",
//   "Appliances",
//   "Carpentry",
//   "Pest Control",
//   "Home Shifting",
// ];

// const services = [
//   {
//     name: "Deep Cleaning",
//     price: "From $50",
//     image: "https://via.placeholder.com/300x200?text=Cleaning",
//   },
//   {
//     name: "Plumbing Repair",
//     price: "From $40",
//     image: "https://via.placeholder.com/300x200?text=Plumbing",
//   },
//   {
//     name: "Electrical Fix",
//     price: "From $35",
//     image: "https://via.placeholder.com/300x200?text=Electrical",
//   },
//   {
//     name: "House Painting",
//     price: "From $120",
//     image: "https://via.placeholder.com/300x200?text=Painting",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="services-page">
//       {/* Hero Section */}
//       <section className="services-hero">
//         <div className="hero-content">
//           <h1>Our Services</h1>
//           <p>
//             Choose from a wide range of professional home services with trusted
//             experts and affordable pricing.
//           </p>
//         </div>
//         <div className="hero-curve"></div>
//       </section>

//       {/* Main Content */}
//       <section className="services-container">
//         {/* Sidebar */}
//         <aside className="categories">
//           <h3>Categories</h3>
//           <ul>
//             {categories.map((cat, i) => (
//               <li key={i}>{cat}</li>
//             ))}
//           </ul>
//         </aside>

//         {/* Service Cards */}
//         <div className="services-list">
//           {services.map((service, i) => (
//             <div className="service-card" key={i}>
//               <img src={service.image} alt={service.name} />
//               <div className="service-info">
//                 <h4>{service.name}</h4>
//                 <p>{service.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
