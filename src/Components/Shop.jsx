import React from 'react'
import Shopping from './Shopping'
import Footer from './Footer'
import { useEffect } from 'react'

const Shop = () => {
    useEffect(()=>{
                window.scrollTo(0,0);
            },[]);
  return (
    <div>
    <div className='bg-orange-50 py-80'>
      <div className='flex flex-col items-center justify-center'>
         <h1 className='text-3xl md:text-5xl font-bold text-green-700 mb-5'>Shop</h1>
         <img src="./Images/yellow-border.WEBP"className='w-60 mb-5'/>
         <h3 className='text-center text-xl md:text-3xl font-bold text-green-700 mb-10 md:mb-20'>We are currently closed for the winter holiday</h3>
         <h1 className='text-center text-3xl md:text-5xl font-bold text-green-700 mb-5 md:w-[1000px]'>Shop ordering re-opens Jan 1, 2025
         Deliveries on Jan 7, 2025</h1>
      </div>
    </div>
    <Shopping/>
    <Footer/>
    </div>
  )
}

export default Shop
