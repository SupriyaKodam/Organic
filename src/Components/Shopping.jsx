import React from 'react'

const Shopping = () => {
  return (
    <div className='bg-green-600 h-[900px] md:h-[700px] sm:h-[800px] relative'>
        <div className='flex items-center justify-center py-20 px-10 relative'>
      <img src="./Images/l.JPEG" className='absolute top-[-150px] lg:w-[800px] lg:h-[400px] md:w-[600px] h-[400px] rounded-lg'/>
      <div className='absolute bottom-[250px] left-1/2 transform -translate-x-1/2 w-[80px] sm:w-[100px]'>
          <img src="./Images/cart.WEBP" className=''/>
      </div>
      <div className='absolute w-[400px] lg:w-[600px] flex flex-col items-center justify-center'>
        <h1 className='mb-3 text-center text-white font-bold text-4xl'>Customize your produce order</h1>
        <img src="./Images/yellow-border.WEBP" className='mb-3 items-center w-[200px]'/>
        <p className='mb-3 text-white text-center font-serif text-xl'>Avoid the hassle of searching for ripe produce at the store.
        Enjoy affordable, fresh produce delivered to you or ready for local pickup.</p>
        <button className='text-center font-semibold text-green-800 bg-white rounded-full px-10 py-3 shadow-2xl'>Start Shopping Now</button>
      </div>
      </div>
      <div className='absolute flex flex-col md:flex-row items-center justify-between mt-60 lg:mx-20 lg:space-x-10'>
          <div className='flex flex-col items-start justify-start lg:w-[500px] px-5 md:px-0'>
             <h1 className='text-white font-bold text-2xl md:text-5xl mb-3'>Receive Produce Updates</h1>
             <img src="./Images/yellow-border.WEBP" className='mb-3'/>
             <p className='text-white font-serif text-xl lg:text-3l mb-3'>Get order reminders and updates on new farms, produce and more</p>
          </div>
          <div className='flex flex-col'>
          <div className='flex-col md:flex md:flex-row'>
        <div className='flex flex-col items-start justify-start space-x-3'>
           <label className='text-white font-bold text-xl'>First Name:</label>
           <input type="text" className="border p-2 rounded-full lg:w-[500px]" />
        </div>
         <div className='flex flex-col items-start justify-start space-x-3'>
             <label className='text-white font-bold text-xl'>Email*</label>
             <input type="text" className="border p-2 rounded-full lg:w-[500px]" />
         </div>
         </div>
         <div className='flex-col md:flex md:flex-row mt-3 space-x-3'>
        <div className='flex flex-col items-start justify-start space-x-3'>
           <label className='text-white font-bold text-xl'>Last Name:</label>
           <input type="text" className="border p-2 rounded-full lg:w-[500px]" />
        </div>
         <div className='flex flex-col items-start justify-start space-x-3 mt-5 lg:mt-3'>
          <button className='py-2 lg:px-40 text-xl border-2 border-white text-white font-bold rounded-3xl hover:bg-gray-700'>Join Our Mailing List</button>
         </div>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Shopping
