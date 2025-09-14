// import React, { useEffect, useState } from "react";

// const Stats = () => {
//   const [count, setCount] = useState({ clients: 0, projects: 0, experts: 0 });

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setCount((prev) => ({
//         clients: Math.min(prev.clients + 5, 500),
//         projects: Math.min(prev.projects + 3, 1200),
//         experts: Math.min(prev.experts + 1, 150),
//       }));
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="stats">
//       <div>
//         <h3>{count.clients}+</h3>
//         <p>Happy Clients</p>
//       </div>
//       <div>
//         <h3>{count.projects}+</h3>
//         <p>Projects Done</p>
//       </div>
//       <div>
//         <h3>{count.experts}+</h3>
//         <p>Experts</p>
//       </div>
//     </section>
//   );
// };

// export default Stats;
