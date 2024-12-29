import React from 'react';

const Locally = () => {
  return (
    <div>
      {/* First section */}
      <div className="flex flex-col lg:flex-row items-center justify-around bg-yellow-100 px-5 pb-60 lg:pb-60 gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-[700px] px-5 md:px-10">
          <h1 className="mb-3 font-bold text-2xl md:text-4xl lg:text-5xl text-green-600">
            Locally-sourced produce
          </h1>
          <img src="./Images/white-border.WEBP" className="mb-3 w-[150px] md:w-[200px]" alt="Decorative Border" />
          <p className="mb-5 text-lg md:text-xl text-green-700 font-semibold">
            We partner with certified organic Western New York farms
          </p>
          <p className="text-sm md:text-lg mb-3">
            Our mission is to keep more revenue within our local community. We are partnered with over 10 different farms located in Western New York to provide an array of products for our customers.
          </p>
          <button className="text-white px-6 md:px-10 py-3 bg-green-800 font-bold rounded-full">
            Learn More About Our Farms
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center lg:w-auto">
          <img src="./Images/f.WEBP" className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]" alt="Farm Image" />
        </div>
      </div>
    </div>
  );
};

export default Locally;
