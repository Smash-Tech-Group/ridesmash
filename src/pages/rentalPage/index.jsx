import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import RentalTitle from '../../components/RentalTitle'
import ServiceCarRental from '../../components/ServiceCarRental'
// import Hero from '../../components/Hero'

const RentalPage = () => {
  return (
    <>
      <div>
        <div className="md:bg-gradient-to-t md:from-black to-transparent">
          <Navbar/>
          <RentalTitle/>
        </div>
         <ServiceCarRental/>
         <Footer/>
      </div>
      

    </>
  )
}

export default RentalPage