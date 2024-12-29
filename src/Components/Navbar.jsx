import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-[50] flex flex-col md:flex-row items-center justify-between p-3 bg-gray-200">
      {/* Logo Section */}
      <div className="hidden md:flex md:flex-row md:items-center">
        <img src="./Images/cart.WEBP" className="w-[100px] lg:w-[120px]" alt="Logo" />
        <div className="flex flex-col ml-2">
          <h1 className="font-bold text-xl lg:text-3xl text-green-500 md:w-full w-[200px]">Organic Produce Direct</h1>
          <h1 className="font-serif text-lg lg:text-2xl text-green-500 md:w-full w-[200px]">Locally grown</h1>
        </div>
      </div>

      {/* Navbar for Large Screens */}
      <div className="hidden lg:flex lg:space-x-10 lg:font-semibold lg:text-xl">
        <button onClick={()=>navigate('/howitworks')}>How it works</button>
        <button onClick={()=>navigate('/about')}>About us</button>
        <button onClick={()=>navigate('/local')}>Local farms</button>
        <button onClick={()=>navigate('/shop')}>Shop</button>
        <button onClick={()=>navigate('/contact')}>Contact</button>
        <InstagramIcon style={{ fontSize: '30px' }} className="text-red-500" />
        <SearchIcon style={{ fontSize: '40px' }} />
        <button onClick={()=>navigate('/login')} className="px-8 py-3 rounded-full text-white font-bold bg-green-500">Login/Signup</button>
      </div>

      {/* Navbar for Medium Screens */}
      <div className="hidden md:flex lg:hidden flex-col w-full">
        <div className="flex items-center justify-between w-full px-4">
          <InstagramIcon style={{ fontSize: '30px' }} className="text-red-500" />
          <SearchIcon style={{ fontSize: '40px' }} />
          <button onClick={()=>navigate('/login')} className="px-6 py-2 rounded-full text-white font-bold bg-green-500">Login/Signup</button>
          <MenuIcon
            style={{ fontSize: '60px' }}
            className="text-white p-2 bg-green-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Sidebar for Medium Screens */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-gray-100 shadow-lg transform transition-transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 bg-green-500">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <CloseIcon
              className="text-white cursor-pointer"
              style={{ fontSize: '30px' }}
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <button className="text-lg" onClick={()=>navigate('/howitworks')}>How it works</button>
            <button className="text-lg" onClick={()=>navigate('/about')}>About us</button>
            <button className="text-lg" onClick={()=>navigate('/local')}>Local farms</button>
            <button className="text-lg" onClick={()=>navigate('/shop')}>Shop</button>
            <button className="text-lg" onClick={()=>navigate('/contact')}>Contact</button>
            <button onClick={()=>navigate('/login')} className="px-6 py-2 rounded-full text-white font-bold bg-green-500">Login/Signup</button>
          </div>
        </div>
      </div>

      {/* Navbar for Small Screens */}
      <div className="sm:flex md:hidden flex-col items-center w-full">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <img src="./Images/cart.WEBP" className="w-[80px]" alt="Logo" />
          <div>
            <h1 className="font-bold text-md text-green-500">Organic Produce Direct</h1>
            <h1 className="font-serif text-md text-green-500">Locally grown</h1>
          </div>
          <MenuIcon
            style={{ fontSize: '40px' }}
            className="text-white p-2 bg-green-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mt-2">
          <InstagramIcon style={{ fontSize: '30px' }} className="text-red-500" />
          <SearchIcon style={{ fontSize: '30px' }} />
          <button className="px-6 py-2 rounded-full text-white font-bold bg-green-500">Login/Signup</button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="flex flex-col items-center space-y-2 mt-3 bg-white p-4 shadow-md rounded-lg">
            <button onClick={()=>navigate('/howitworks')}>How it works</button>
            <button onClick={()=>navigate('/about')}>About us</button>
            <button onClick={()=>navigate('/local')}>Local farms</button>
            <button onClick={()=>navigate('/shop')}>Shop</button>
            <button onClick={()=>navigate('/contact')}>Contact</button>
            <button onClick={()=>navigate('/login')} className="px-8 py-2 rounded-full text-white font-bold bg-green-500">Login/Signup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
