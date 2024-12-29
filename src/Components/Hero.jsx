import React from 'react';

const Hero = () => {
  return (
    <div className="mt-32 z-[40] relative">
      {/* Hero Image */}
      <img 
        src="/Images/h.WEBP" 
        className="w-full lg:h-auto h-[100vh] object-cover" 
        alt="Hero Image"
      />

      {/* White Box Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-10">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg max-w-md sm:max-w-lg mx-4 sm:mx-6 relative">
          {/* Cart Icon Positioned at the Top Center */}
          <img 
            src="/Images/cart.WEBP" 
            className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[80px] sm:w-[100px]" 
            alt="Cart Icon" 
          />
          <div className='flex flex-col items-center justify-center'>
          <h1 className="mt-8 text-2xl sm:text-3xl font-bold text-center text-green-500">Support local.</h1>
          <h1 className="text-xl sm:text-2xl font-semibold text-center text-green-500 mb-3">Buy local.</h1>
          <img src="./Images/yellow-border.WEBP" className='flex items-center justify-center'/>
          <p className="text-center text-sm sm:text-lg px-4 md:px-16 mt-4">
            Choose from our vast in-season selection of locally-sourced organic produce for pickup or delivery from our local certified organic farms.
          </p>
          </div>
          <div className="text-center mt-6">
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-green-500 text-white font-bold">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
