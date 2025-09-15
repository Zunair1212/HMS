import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ServicesPage from './pages/service';

import About from './pages/about';
import ContactPage from './pages/contact';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
   <BrowserRouter>

   <Navbar/>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<ServicesPage/>}/>\
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    
   

   </Routes>
   <Footer/>

   </BrowserRouter>
  );
}

export default App;
