import './App.css';
// import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ServicesPage from './pages/service';
// import LoginForm from "./components/login";


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const [showLogin, setShowLogin] = useState(false);
  return (
   <BrowserRouter>
    {/* <Navbar onLoginClick={() => setShowLogin(true)} />
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />} */}
   <Navbar/>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<ServicesPage/>}/>
    
   

   </Routes>
   <Footer/>

   </BrowserRouter>
  );
}

export default App;
