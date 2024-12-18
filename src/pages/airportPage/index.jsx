import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import RentalTitle from '../../components/RentalTitle'
import AirportTitle from '../../components/AirportTitle'
import ServiceAirport from '../../components/serviceAirport'
// import Hero from '../../components/Hero'

const AirportPage = () => {
  return (
    <>
      <div>
        <div className="md:bg-gradient-to-t md:from-black to-transparent">
          <Navbar/>
          <AirportTitle/>
        </div>
          <ServiceAirport/>
          <Footer/>
      </div>
      

    </>
  )
}

export default AirportPage