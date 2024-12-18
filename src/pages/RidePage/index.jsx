import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
// import Hero from '../../components/Hero'

const RidePage = () => {
  return (
    <>
      <div>
        <div className="md:bg-gradient-to-t md:from-black to-transparent">
          <Navbar/>
          <RideTitle/>
          
        </div>
        <ServiceRide/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default RidePage