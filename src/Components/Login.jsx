import React from 'react'
import Shopping from './Shopping'
import Footer from './Footer'
import { useEffect } from 'react'

const Login = () => {
    useEffect(()=>{
                window.scrollTo(0,0);
            },[]);
  return (
    <div className='mt-32 bg-orange-50'>
      <div className="relative mb-20">
        {/* Background Image with slightly dark overlay for better text contrast */}
        <img src="./Images/how-it-works.WEBP" className="w-full h-[50vh] lg:h-auto" alt="How it works background" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white font-bold">
          <h1 className="text-xl md:text-5xl mb-2 drop-shadow-lg">My Account</h1>
          <img src="./Images/yellow-border.WEBP" className="w-40 md:w-60 mb-2" alt="Yellow border" />
        </div>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
        <div className='flex flex-col items-start justify-start mb-80'>
            <h1 className='text-3xl md:text-5xl text-green-700 font-bold mb-6'>Login</h1>
            <div className='flex flex-col items-start justify-start border-2 border-gray-500 p-5 rounded-xl md:w-[700px]'>
                 <label className='text-lg font-serif'>Username or email address *</label>
                 <input type="text" className='border-2 p-3 md:w-[500px] rounded-xl border-gray-500'/>
                 <label className='text-lg font-serif'>Password*</label>
                 <input type="text" className='border-2 p-3 md:w-[500px] rounded-xl border-gray-500'/>
                 <div className='flex flex-row space-x-5 mt-3'>
                     <button className='text-white font-bold p-3 bg-green-700 w-24 rounded-xl'>Login</button>
                     <input type="checkbox" className='w-5'/>
                     <label className='text-xl font-serif'>Remember me</label>
                 </div>
                 <h1 className='text-lg font-serif hover:underline mt-5'>Forgot password?</h1>
            </div>
        </div>
            <div className='flex flex-col items-start justify-start mb-40 md:w-[700px]'>
                <h1 className='text-3xl md:text-5xl text-green-700 font-bold mb-6'>Register</h1>
                <div className='flex flex-col items-start justify-start border-2 border-gray-500 p-5 rounded-xl'>
                <label className='text-lg font-serif'>Email address *</label>
                 <input type="text" className='border-2 p-3 md:w-[500px] rounded-xl border-gray-500'/>
                 <p className='md:w-[450px] mt-3 font-serif text-lg mb-3'>A link to set a new password will be sent to your email address.</p>
                 <div className='flex space-x-2'>
                 <input type="checkbox" className='w-5'/>
                  <label className='text-xl font-serif mb-5'>Receive Our Produce Update Emails</label>
                  </div>
                  <p className='text-xl font-serif md:w-[700px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<span className='hover:underline'>Privacy policy.</span> </p>
                  <button className='text-white font-bold p-3 bg-green-700 w-24 rounded-xl'>Register</button>
                </div>
            </div>
      </div>
      <Shopping/>
      <Footer/>
    </div>
  )
}

export default Login
