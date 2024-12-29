import React from 'react';

const Working = () => {
  return (
    <div>
      <div className='relative'>
        {/* Main image */}
        <img src="./Images/p.JPEG" className='h-[180vh] md:h-[150vh] lg:w-full lg:h-auto opacity-50' />
        
        {/* Image positioned at the top right */}
        <div className='absolute top-[-150px] right-0'>
          <img src="./Images/leaf.WEBP" className='w-40 h-60 md:w-60 md:h-96' alt="Top Right Image" />
        </div>
        <div className='absolute left-[60px] bottom-[-100px]'>
          <img src="./Images/arrow.WEBP" className='w-20 h-40 md:w-60 md:h-60' alt="Top Right Image" />
        </div> 
        {/* Centered title */}
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <h1 className='text-orange-600 text-3xl md:text-5xl font-bold mb-5'>
            How it Works
          </h1>
          <img src="./Images/white-border.WEBP" className='mb-5'/>
          <p className='font-bold text-2xl mb-5'>A simple process that gives you full control over your order</p>
          <div className='flex flex-col md:flex-row md:space-x-5 lg:space-x-20'>
              <div className='flex flex-col'>
              <img src="./Images/1.WEBP" className='mb-5 mx-10 md:mx-10 w-[300px] md:w-[200px] lg:w-[300px]'/>
              <div className='flex flex-row space-x-3 md:w-[200px] lg:w-[300px]'>
              <img src="./Images/1 (1).WEBP" className='w-20 h-20'/>
              <p className='font-bold text-xl'>Select your produce between Wednesday and Sunday</p>
              </div>
              </div>
              <div className='flex flex-col'>
              <img src="./Images/2.WEBP" className='mb-5 mx-10 md:mx-10 w-[300px] md:w-[200px] lg:w-[300px]'/>
              <div className='flex flex-row space-x-3 md:w-[200px] lg:w-[300px]'>
              <img src="./Images/2 (1).WEBP" className='w-20 h-20'/>
              <p className='font-bold text-xl'>Pick it up at our designated location in Buffalo or have it delivered on Tuesday</p>
              </div>
              </div>
              <div className='flex flex-col'>
              <img src="./Images/3.WEBP" className='mb-5 mx-10 md:mx-10 w-[300px] md:w-[200px] lg:w-[300px]'/>
              <div className='flex flex-row space-x-3 md:w-[200px] lg:w-[300px]'>
              <img src="./Images/3 (1).WEBP" className='w-20 h-20'/>
              <p className=' font-bold text-xl'>Enjoy your fresh, locally-sourced items</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
