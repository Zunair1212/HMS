import React, { useState } from "react";
import ServiceCard from "./servicecard";
import "./sidebarwithservices.css";

const SidebarWithServices = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Popular",
    "Cleaning",
    "TV and Electronics",
    "Assembly",
    "Plumbing",
    "Electrical",
    "Painting",
    "Moving",
    "Smart Home",
    "Window Treatments",
  ];

  const services = [
    { id: 1, name: "Home Cleaning", category: "Cleaning", desc: "Full home deep clean", price: "PKR 2500", image: "home-cleaning.webp" },
    { id: 2, name: "Washing Clothes", category: "Cleaning", desc: "Wash clothes", price: "PKR 1000", image: "home-cleaning2.jpg" },
    { id: 3, name: "Kitchen Cleaning", category: "Cleaning", desc: "Kitchen Cleaning", price: "PKR 1000", image: "home-cleaning3.jpg" },
    { id: 4, name: "Furniture Assembly", category: "Assembly", desc: "Assemble furniture safely", price: "PKR 2000", image: "/assembly.jpg" },
    { id: 5, name: "Full Home Cleaning", category: "Popular", desc: "Full home deep clean", price: "PKR 3500", image: "home-cleaning1.jpg" },
    { id: 6, name: "TV Mounting", category: "TV and Electronics", desc: "Wall-mount your TV securely", price: "PKR 1800", image: "tv.webp" },
    { id: 7, name: "Pipe Leakage Fix", category: "Plumbing", desc: "Fix broken pipes & taps", price: "PKR 1200", image: "pipe.webp" },
    { id: 8, name: "Switch Board Repair", category: "Electrical", desc: "Fix electrical wiring & boards", price: "PKR 900", image: "switxh.jpg" },
    { id: 9, name: "Wall Painting", category: "Painting", desc: "Professional painting service", price: "PKR 5000", image: "painting.jpg" },
    { id: 10, name: "Plumbing", category: "Popular", desc: "Professional plumbing service", price: "PKR 3000", image: "plumbing.jpg" },
    { id: 11, name: "Office Moving", category: "Moving", desc: "Relocate offices & furniture", price: "PKR 15000", image: "moving.png" },
    { id: 12, name: "Smart Home Setup", category: "Smart Home", desc: "Install smart devices", price: "PKR 7000", image: "setup.jpg" },
    { id: 13, name: "Window Blinds Setup", category: "Window Treatments", desc: "Install blinds & curtains", price: "PKR 2500", image: "window.jpg" },
    { id: 14, name: "Repairing", category: "TV and Electronics", desc: "Repairing all type of electronics ", price: "PKR 1800", image: "electronics1.jpg" },
    { id: 15, name: "Painting", category: "Popular", desc: "All type of Painting", price: "PKR 1800", image: "painting-popular.jpg" },
  ];

  // 🟢 Filter logic
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="sidebar-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>All Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Service Cards */}
      <div className="service-cards">
        <h2>{activeCategory} Services</h2>
        <div className="cards-grid">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              desc={service.desc}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarWithServices;


// import React, { useState } from "react";
// import ServiceCard from "./servicecard";
// import "./sidebarwithservices.css";

// const SidebarWithServices = () => {
//   const [activeCategory, setActiveCategory] = useState("Popular");

//   // 🟢 Static Services Data
//   const categories = ["Popular", "Cleaning", "Plumbing", "Electrical", "Painting", "Shifting"];

//   const services = {
//     Popular: [
//       { id: 1, name: "Home Deep Cleaning", desc: "Professional cleaning for full home", price: "PKR 2500", image: "/images/cleaning.jpg" },
//       { id: 2, name: "Pipe Leakage Fix", desc: "Quick plumbing repair", price: "PKR 1200", image: "/images/plumbing.jpg" },
//       { id: 3, name: "Switch Board Repair", desc: "Electrical fixing & safety", price: "PKR 800", image: "/images/electrical.jpg" },
//     ],
//     Cleaning: [
//       { id: 4, name: "Kitchen Cleaning", desc: "Deep clean kitchen & shelves", price: "PKR 1500", image: "/images/kitchen.jpg" },
//       { id: 5, name: "Bathroom Cleaning", desc: "Remove stains, germs & odors", price: "PKR 1800", image: "/images/bathroom.jpg" },
//       { id: 6, name: "Sofa Cleaning", desc: "Steam wash fabric & leather sofas", price: "PKR 2000", image: "/images/sofa.jpg" },
//     ],
//     Plumbing: [
//       { id: 7, name: "Pipe Leakage Fix", desc: "Fix leaks, pipes & taps", price: "PKR 1200", image: "/images/plumbing.jpg" },
//       { id: 8, name: "Drain Blockage", desc: "Unclog bathroom & kitchen drains", price: "PKR 1700", image: "/images/drain.jpg" },
//     ],
//     Electrical: [
//       { id: 9, name: "Switch Board Repair", desc: "Fix short circuits", price: "PKR 800", image: "/images/electrical.jpg" },
//       { id: 10, name: "Fan Installation", desc: "Ceiling & wall fan fitting", price: "PKR 1000", image: "/images/fan.jpg" },
//     ],
//     Painting: [
//       { id: 11, name: "Wall Painting", desc: "Interior & exterior painting", price: "PKR 5000", image: "/images/painting.jpg" },
//       { id: 12, name: "Touch-up Painting", desc: "Small wall repairs", price: "PKR 2000", image: "/images/touchup.jpg" },
//     ],
//     Shifting: [
//       { id: 13, name: "House Shifting", desc: "Pack & move house safely", price: "PKR 8000", image: "/images/house.jpg" },
//       { id: 14, name: "Office Relocation", desc: "Move office furniture & equipment", price: "PKR 15000", image: "/images/office.jpg" },
//     ],
//   };

//   return (
//     <div className="sidebar-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2>Services</h2>
//         <ul>
//           {categories.map((cat) => (
//             <li
//               key={cat}
//               className={activeCategory === cat ? "active" : ""}
//               onClick={() => setActiveCategory(cat)}
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Service Cards */}
//       <div className="service-cards">
//         <h2>{activeCategory} Services</h2>
//         <div className="cards-grid">
//           {services[activeCategory].map((service) => (
//             <ServiceCard
//               key={service.id}
//               name={service.name}
//               desc={service.desc}
//               price={service.price}
//               image={service.image}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarWithServices;
