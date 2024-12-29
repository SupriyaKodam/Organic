import React, { useEffect } from 'react'
import Shopping from './Shopping'
import Footer from './Footer'

const Aboutus = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div>
    <div className='mt-20 bg-orange-50'>
      <div className="relative">
        {/* Background Image with slightly dark overlay for better text contrast */}
        <img src="./Images/Aboutus.WEBP" className="w-full h-[50vh] lg:h-auto" alt="How it works background" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white font-bold">
          <h1 className="text-xl md:text-5xl mb-2 drop-shadow-lg">About Us</h1>
          <img src="./Images/yellow-border.WEBP" className="w-40 md:w-60 mb-2" alt="Yellow border" />
        </div>
      </div>
      <div className='flex flex-col container mx-auto items-center justify-center mt-10 p-10'>
          <h1 className='text-center text-green-700 text-3xl md:text-5xl font-bold md:w-[550px] mb-3'>The story behind Organic Produce Direct</h1>
          <img src="./Images/green-border.WEBP" className='mb-3 w-60'/>
          <p className='text-lg md:text-xl text-gray-600 mb-5'>Organic Produce Direct was created with the goal of offering a more flexible, supportive solution to people in search of organic produce. We carefully researched farms located within Western New York to find sustainable, certified organic sources.</p>
          <p className='text-lg md:text-xl text-gray-600'>With over 10 partnering farms (and growing!), we are proud to offer the community a customizable option for affordable, GMO and pesticide-free products.</p>
      </div>
      <div className='flex flex-col lg:flex-row container mx-auto items-center justify-around py-20'>
           <img src="./Images/mission.WEBP" className='rounded-2xl'/>
           <div className='flex flex-col items-start justify-start w-[600px]'>
               <h1 className='text-3xl md:text-5xl text-green-700 font-bold mb-5 '>Our mission and values</h1>
               <h1 className='text-xl md:text-3xl text-green-700 font-semibold  mb-5'>Support local farms and promote sustainable, organic eating habits</h1>
               <img src="./Images/green-border.WEBP" className='mb-10 w-60'/>
               <p className='text-gray-600 text-md md:text-xl mb-10'>Our mission is to provide people with certified organic produce that they can be proud to cook with. We want to shift the options available to people when it comes to eating healthy and supporting local businesses.</p>
               <p className='text-gray-600 text-md md:text-xl'>By offering a more affordable, organic source for produce, we are encouraging more sustainable eating habits and keeping more revenue out of large chain grocery stores and in our local community.</p>
           </div>
      </div>
    </div>
    <div className='bg-green-200'>
    <img src="./Images/yellow-bottom-wave.PNG" className='w-full'/>
    <div className='flex flex-col items-center justify-center container mx-auto'>
         <h1 className='text-3xl md:text-5xl text-green-700 font-bold mb-5'>What sets us apart</h1>
         <img src="./Images/white-border.WEBP" className='mb-5 md:w-60'/>
         <p className='text-xl md:text-3xl mb-10'>A fully customizable, convenient source for organic produce</p>
         <div className='flex flex-col md:flex-row space-x-14 mb-40'>
             <div className='flex flex-col items-center justify-center'>
                 <img src="./Images/1.WEBP"/>
                 <p className='w-[200px] text-lg text-gray-700'>GMO and pesticide-free certified organic produce</p>
             </div>
             <div className='flex flex-col items-center justify-center'>
                 <img src="./Images/2.WEBP"/>
                 <p className='w-[200px] text-lg text-gray-700'>Locally-sourced products from Western New York</p>
             </div>
             <div className='flex flex-col items-center justify-center'>
                 <img src="./Images/3.WEBP"/>
                 <p className='w-[200px] text-lg text-gray-700'>Select the type and quantity of produce in your order</p>
             </div>
         </div>
    </div>
    </div>
    <div className='bg-orange-50'>
    <img src="./Images/green-bottom.WEBP"/>
    <div className='bg-orange-50 flex flex-col items-center justify-center'>
         <h1 className='text-green-700 text-3xl md:text-5xl font-bold mb-3'>About our farms</h1>
         <img src="./Images/yellow-border.WEBP" className='w-60 mb-5'/>
         <p className='text-xl md:text-3xl text-green-700 font-bold mb-5'>Partnering with certified organic Western New York farms Learn about our farms</p>
         <button className='text-white text-xl font-bold p-3 bg-green-700 rounded-3xl mb-60'>Learn About Our Farms</button>
    </div>
    </div>
    <Shopping/>
    <Footer/>
    </div>
    
  )
}

export default Aboutus
