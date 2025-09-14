// import React, { useState } from "react";

// const testimonials = [
//   { name: "Sarah M.", text: "Excellent service! Highly recommend.", img: "/assets/user1.jpg" },
//   { name: "James L.", text: "Professional and quick response.", img: "/assets/user2.jpg" },
//   { name: "Maria K.", text: "Very affordable and reliable.", img: "/assets/user3.jpg" },
// ];

// const Testimonials = () => {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
//   const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   return (
//     <section className="testimonials">
//       <h2>What Our Clients Say</h2>
//       <div className="testimonial-card">
//         <img src={testimonials[index].img} alt={testimonials[index].name} />
//         <p>"{testimonials[index].text}"</p>
//         <h4>- {testimonials[index].name}</h4>
//       </div>
//       <div className="testimonial-nav">
//         <button onClick={prev}>←</button>
//         <button onClick={next}>→</button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
