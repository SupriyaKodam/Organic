import React, { useEffect } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import Shopping from './Shopping';
import Footer from './Footer';

const Contact = () => {
    useEffect(()=>{
            window.scrollTo(0,0);
        },[]);
  return (
    <div>
    <div className='mt-32 bg-orange-50'>
      <div className="relative">
        {/* Background Image with slightly dark overlay for better text contrast */}
        <img src="./Images/Aboutus.WEBP" className="w-full h-[50vh] lg:h-auto" alt="How it works background" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white font-bold">
          <h1 className="text-xl md:text-5xl mb-2 drop-shadow-lg">Contact Us</h1>
          <img src="./Images/yellow-border.WEBP" className="w-40 md:w-60 mb-2" alt="Yellow border" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pb-80'>
         <h1 className='text-3xl md:text-5xl text-green-700 font-bold p-10'>Send us a message</h1>
         <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center'>
            <div className='flex flex-col items-start justify-start md:p-20'>
               <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-3'>
                    <div className='flex flex-col md:space-y-3 px-10 md:px-0'>
                         <label className='text-xl font-serif '>First name*</label>
                         <input type="text" className='border-2 p-3 md:w-[400px] rounded-3xl bg-orange-50 border-green-700'/>
                    </div>
                    <div className='flex flex-col md:space-y-3 px-10 md:px-0'>
                         <label className='text-xl font-serif'>Last name*</label>
                          <input type="text" className='border-2 p-3 md:w-[400px] rounded-3xl bg-orange-50 border-green-700'/>
                    </div>
               </div>
               <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-3 items-center justify-center'>
                    <div className='flex flex-col md:space-y-3 px-10 md:px-0'>
                         <label className='text-xl font-serif'>Email*</label>
                         <input type="text" className='border-2 p-3 md:w-[400px] rounded-3xl bg-orange-50 border-green-700'/>
                    </div>
                    <div className='flex flex-col md:space-y-3 px-10 md:px-0'>
                         <label className='text-xl font-serif'>Phone Number*</label>
                          <input type="text" className='border-2 p-3 md:w-[400px] rounded-3xl bg-orange-50 border-green-700'/>
                    </div>
               </div>
                    <div className='flex flex-col md:space-y-3 px-8 md:px-0'>
                        <label className='text-xl font-serif'>How did you hear about us?</label>
                        <input type="text" className='border-2 p-3 md:w-[820px] rounded-3xl bg-orange-50 border-green-700'/>
                    </div>
                    <div className='flex flex-col md:space-y-3 px-3 md:px-0'>
                        <label className='text-xl font-serif'>Let us know your thoughts!</label>
                        <input type="text" className='border-2 p-20 md:p-32 md:w-[820px] rounded-3xl bg-orange-50 border-green-700'/>
                    </div>
                    <div className='flex mt-3'>
                       <input type="checkbox" className='w-10'/>
                       <p>By submitting this form, I agree to Organic Produce Direct’s Privacy Policy.*</p>
                    </div>
                    <div className='mt-10 items-center justify-center mb-5 md:mb-0'>
                        <button className='text-white w-40 font-bold text-xl p-3 bg-green-700 rounded-3xl text-center'>Submit</button>
                    </div>
            </div>
            <div className='flex flex-col items-start justify-start border-2 border-green-700 p-10 rounded-2xl lg:mb-[550px]'>
                  <p><span className='text-lg font-bold'>Talk to us:</span> <span className='underline text-blue-700'>716-539-9199</span></p>
                  <p><span className='text-lg font-bold'>Email us:</span> <span className='underline text-blue-700'>info@organicproducedirect.net</span></p>
                  <p><span className='text-lg font-bold'>Follow us:</span> <span className='underline text-red-600'><InstagramIcon/></span></p>
            </div>
         </div>
      </div>
    </div>
    <Shopping/>
    <Footer/>
    </div>
  )
}

export default Contact
