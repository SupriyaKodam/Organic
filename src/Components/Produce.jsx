import React from 'react';

const Produce = () => {
  const items = [
    { img: "./Images/9.WEBP", text: "Our produce is certified organic" },
    { img: "./Images/10.WEBP", text: "Customize your order each week" },
    { img: "./Images/11.WEBP", text: "More affordable than grocery store produce" },
    { img: "./Images/12.WEBP", text: "Pick up your order or have it delivered to you" },
  ];

  return (
    <div className='relative flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 pb-40 bg-green-50 space-y-10'>
        <div className='absolute left-20 bottom-[-50px]'>
           <img src="./Images/arrow.WEBP" className='w-[100px]'/>
        </div>
      {/* Section Title */}
      <h1 className='text-green-800 text-2xl md:text-4xl font-bold text-center'>
        Why Organic Produce Direct
      </h1>
      <img src="./Images/yellow-border.WEBP" alt="Yellow Border" className='w-24 md:w-40' />
      <p className='text-lg md:text-xl text-center'>
        Skip the grocery store and support local farms
      </p>

      {/* Items Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center space-y-4 bg-white p-4 rounded-lg shadow-md'
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.text}
              className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover rounded-lg'
            />
            {/* Paragraph */}
            <p className='text-green-800 text-base md:text-lg font-medium'>{item.text}</p>
          </div>
        ))}
      </div>
      <button className='text=white px-8 py-3 text-white rounded-full font-bold text-xl bg-green-800'>Learn More about us</button>
    </div>
  );
};

export default Produce;
