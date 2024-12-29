import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Fruits from '../Components/Fruits'
import Working from '../Components/Working'
import Featured from '../Components/Featured'
import Produce from '../Components/Produce'
import Locally from '../Components/Locally'
import Shopping from '../Components/Shopping'
import Footer from '../Components/Footer'


const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Fruits/>
      <Working/>
      <Featured/>
      <Produce/>
      <Locally/>
      <Shopping/>
      <Footer/>
    </div>
  )
}

export default Landingpage
