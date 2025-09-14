import React from "react";
import "./servicecard.css";

const ServiceCard = ({ name, desc, price, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-img" />
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="service-price">{price}</span>
      <button>Book Now</button>
    </div>
  );
};

export default ServiceCard;
