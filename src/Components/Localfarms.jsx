import React from 'react'
import Shopping from './Shopping'
import Footer from './Footer'
import { useEffect } from 'react'

const Localfarms = () => {
    useEffect(()=>{
                window.scrollTo(0,0);
            },[]);
    const items =[
        {
            img:"./Images/image1.WEBP",
            heading1:"Abers Acres",
            heading2:"Kennedy, NY",
            text:"Fruit - Certified Organic",
        },
        {
            img:"./Images/image2.WEBP",
            heading1:"Chickadee Chocolate",
            heading2:"Rochester, NY",
            text:"Specialty Items",
        },
        {
            img:"./Images/image3.WEBP",
            heading1:"Cornerstone orchards",
            heading2:"Youngstown, NY",
            text:"Fruit",
        },
        {
            img:"./Images/image4.WEBP",
            heading1:"Dirt Rich Farm",
            heading2:"Springville, New York",
            text:"Vegetables - Certified Organic",
        },
        {
            img:"./Images/image5.WEBP",
            heading1:"Domaine Lachaal",
            heading2:"Buffalo - Tunisia",
            text:"Specialty Items",
        },
        {
            img:"./Images/image6.WEBP",
            heading1:"Ellicottville Greens",
            text:"Herbs",
        },
        {
            img:"./Images/image7.WEBP",
            heading1:"Gentle Bee Honey",
            heading2:"East Aurora, New York",
        },
        {
            img:"./Images/image8.WEBP",
            heading1:"Heartland Organics",
            heading2:"Niagara County, New York",
            text:"Mushrooms - Certified Organic",
        },
        {
            img:"./Images/image9.WEBP",
            heading1:"Life Itself",
            heading2:"buffalo, NY",
            text:"Specialty Items",
        },
    ]
  return (
    <div className='bg-yellow-50 mt-28'>
      <div className="relative">
        {/* Background Image with slightly dark overlay for better text contrast */}
        <img src="./Images/local.WEBP" className="w-full h-[50vh] lg:h-auto" alt="How it works background" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white font-bold">
          <h1 className="text-3xl md:text-5xl mb-5 drop-shadow-lg">Local Farms</h1>
          <img src="./Images/yellow-border.WEBP" className="w-40 md:w-60 mb-5" alt="Yellow border" />
          <p className='text-xl'>Partnering with organic farms based in Western New York</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 md:mt-40 bg-yellow-50 mb-60 '>
          {items.map((item,index)=>{
            return(
                <div className='container mx-auto w-3/4'>
                     <div className='flex flex-col items-center justify-center w-[300px] h-[600px] lg:w-[400px] lg:h-[500px]'>
                           <img key={index} src={item.img} className='w-[400px] h-[300px] rounded-2xl'/>
                           <h1 className='text-xl md:text-3xl text-green-700 font-bold mb-3'>{item.heading1}</h1>
                           <h1 className='text-lg md:text-2xl text-green-700 font-bold mb-3'>{item.heading2}</h1>
                           <h1 className='text-md md:text-xl text-gray-600 font-bold mb-3'>{item.text}</h1>
                           <button className='text-white bg-green-700 p-3 w-60 rounded-2xl mb-10'>Shop here</button>
                     </div>
                </div>
            )
          })}
      </div>
      <Shopping/>
      <Footer/>
    </div>
  )
}

export default Localfarms
