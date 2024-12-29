import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col lg:flex-row items-center justify-around mt-10 mb-10'>
        <div className='flex flex-row'>
        <img src="./Images/cart.WEBP" className='w-28 h-28'/>
      <div className='flex flex-col'>
          <h1 className='text-green-700 text-3xl font-bold'>Organic Produce Direct</h1>
          <h1 className='text-2xl font-serif text-green-700 lg:text-center'>Locally grown</h1>
      </div>
      </div>
      <div className='flex flex-col'>
          <h1 className='text-lg'>Email us at <span className='text-green-700 text-lg'>Info@organicproducedirect.net</span></h1>
          <h1 className='lg:text-end text-lg hover:underline'>Leave a Review</h1>
      </div>
    </div>
    <hr className='w-full border-1 border-green-300 mb-2'/>
      <div className='flex flex-col lg:flex-row items-center justify-around mt-3 mb-3'>
          <div>
            <h1><span className='hover:underline'>Privacy Policy</span>| <span className='hover:underline'>   Web Accessibility </span>  | <span className='hover:underline'>Site Map</span></h1>
          </div>
          <div>
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
          </div>
      </div>
      <div className='flex flex-col p-5 bg-green-300'>
        <h1 className='text-center'>Copyright © 2024 Organic Produce Direct. All rights reserved. Designed by Tinyfrog Technologies.</h1>
      </div>
    </div>
  )
}

export default Footer
