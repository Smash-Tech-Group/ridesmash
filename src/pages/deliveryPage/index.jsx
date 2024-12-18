import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import DeliveryTitle from '../../components/DeliveryTitle'
import ServiceDelivery from '../../components/ServiceDelivery'
// import Hero from '../../components/Hero'

const DeliveryPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <DeliveryTitle/>
          
        </div>
        <ServiceDelivery/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default DeliveryPage