import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Navbar from './Components/Navbar';
import HowitWorks from './Components/HowitWorks';
import Aboutus from './Components/Aboutus';
import Localfarms from './Components/Localfarms';
import Login from './Components/Login';
import Shop from './Components/Shop';
import Contact from './Components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Define the Home Route */}
        <Route path="/" element={<Landingpage />} />
        <Route path='/howitworks' element={<HowitWorks/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/local' element={<Localfarms/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
