// import React, { useState } from "react";
// import "./login.css";

// const LoginForm = ({ onClose }) => {
//   const [isSignup, setIsSignup] = useState(false);

//   return (
//     <div className="login-overlay">
//       <div className="login-form">
//         <span className="close-btn" onClick={onClose}>✖</span>
//         <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        
//         {isSignup && (
//           <input type="text" placeholder="Name" />
//         )}
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />

//         <button>{isSignup ? "Sign Up" : "Login"}</button>

//         <div className="toggle-form">
//           {isSignup ? (
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsSignup(false)}>Login</span>
//             </p>
//           ) : (
//             <p>
//               Don’t have an account?{" "}
//               <span onClick={() => setIsSignup(true)}>Sign Up</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
