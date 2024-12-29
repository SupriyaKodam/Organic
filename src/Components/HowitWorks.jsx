import React from 'react';
import HowStartStopping from './HowStartStopping';
import HowFAQ from './HowFAQ';
import { useEffect } from 'react';

const HowitWorks = () => {
    useEffect(()=>{
                window.scrollTo(0,0);
            },[]);
    const items=[
        {
            img1:"./Images/1.WEBP",
            img2:"./Images/1 (1).WEBP",
            heading:"Select your produce between Wednesday and Sunday",
            text1:"We offer a wide array of produce, from fruits and vegetables to mushrooms, herbs, and more. Our selection changes throughout the season as different produce becomes available.",
            text2:"Every week between Wednesday and Sunday, select fresh produce from one of our local organic farms.",
            text3:"Unlike other produce delivery companies, you have full control over the type and quantity of produce you receive. Plus, if you want to skip a week, you can! There are no contracts or obligations for your orders.",
        },
        {
            img1:"./Images/2.WEBP",
            img2:"./Images/2 (1).WEBP",
            heading:"Pick it up at our designated location in Buffalo or have it delivered",
            text1:"Once you have solidified your produce order by Sunday, it will be available for you on Tuesday for pick up or delivery.",
            text2:"All of the farms are located within 60 miles of Buffalo. You have the freedom to choose if you want your order delivered to you within Erie County or if you want to pick it up at our designated location.",
        },
        {
            img1:"./Images/3.WEBP",
            img2:"./Images/3 (1).WEBP",
            heading:"Enjoy your fresh, locally-sourced organic produce",
            text1:"Now that you've received your order, you can enjoy your produce knowing that it's certified organic. And don't forget the added benefit of keeping revenue in the community by supporting local Western New York farms!",
            text2:"If you like what you received, you can reorder your produce again the following week or explore other options from the shop.",
        },
    ]
  return (
    <div className="mt-40 md:mt-28 bg-orange-50">
      <div className="relative">
        {/* Background Image with slightly dark overlay for better text contrast */}
        <img src="./Images/how-it-works.WEBP" className="w-full h-[50vh] lg:h-auto" alt="How it works background" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white font-bold">
          <h1 className="text-xl md:text-5xl mb-2 drop-shadow-lg">How It Works</h1>
          <img src="./Images/yellow-border.WEBP" className="w-40 md:w-60 mb-2" alt="Yellow border" />
          <h1 className="text-xl md:text-3xl drop-shadow-lg text-center">
            A simple process that allows you to customize your order
          </h1>
        </div>
      </div>
        <div>
            {items.map((item,index)=>{
                return(
                    <div className=''>
                    <div className='container mx-auto mt-10'>
                         <div className='flex flex-col lg:flex-row items-center justify-around'>
                             <div className=''>
                             <img key={index} src={item.img1} className='md:w-[400px] rounded-full p-5 bg-green-600'/>
                             </div>
                             <div className='flex flex-col items-start justify-start lg:w-[60%] p-5 md:p-0'>
                                <div className='flex flex-row space-x-3'>
                                     <img src={item.img2} className='w-16 h-16'/>
                                     <h1 className='text-3xl md:text-5xl font-bold mb-10 text-green-700'>{item.heading}</h1>
                                </div>
                                <div>
                                    <h3 className='text-xl text-gray-600 mb-3'>{item.text1}</h3>
                                    <h3 className='text-xl text-gray-600 mb-3'>{item.text2}</h3>
                                    <h3 className='text-xl text-gray-600 mb-3'>{item.text3}</h3>
                                </div>
                             </div>
                         </div>
                    </div>
                    </div>
                )
            })}
        </div>
        <div className="relative">
       <img src="./Images/green.WEBP" alt="Green Background" />
       <div className="absolute bottom-10 left-40 top-20">
      <img src="/Images/arrow.WEBP" alt="Arrow" className="w-40 h-60"/>
       </div>
       </div>
       <HowStartStopping/>
       <div className="relative">
        <img src="/Images/green-bottom.WEBP" alt="Green Bottom" className="w-full h-auto" />
      </div>
      <HowFAQ/>
    </div>
  );
};

export default HowitWorks;
