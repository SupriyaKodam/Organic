import React from 'react';

const HowStartStopping = () => {
  const items = [
    { img: "./Images/4.WEBP", text: "Prepared Meals" },
    { img: "./Images/5.WEBP", text: "Vegetables" },
    { img: "./Images/6.WEBP", text: "Fruit" },
    { img: "./Images/7.WEBP", text: "Mushrooms" },
    { img: "./Images/8.WEBP", text: "Herbs" },
  ];

  return (
    <div className='bg-green-100 p-10 md:p-20'>
      <h1 className='text-center text-3xl md:text-5xl font-bold text-green-800 mb-10'>
      Start shopping
      </h1>
      <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-10'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full md:w-[250px]'
          >
            <img
              src={item.img}
              className='w-full h-[200px] object-cover rounded-md mb-4'
              alt={item.text}
            />
            <h1 className='text-green-800 text-xl font-semibold mb-2'>{item.text}</h1>
            <button className='text-white font-bold bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition'>
              Shop Produce
            </button>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
      <button className='mt-10 text-center text-green-700 font-bold border-2 border-green-700 px-6 py-2 rounded-full hover:bg-green-700 transition'>
       View all Produce</button>
      </div>
    </div>
  );
};

export default HowStartStopping;
