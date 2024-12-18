import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SmashwiseTitle from '../../components/SmashwiseTitle'
import Smashwise from '../../components/Smashwise'
import SmashBusinessTitle from '../../components/SmashBusinessTitle'
import ServiceBusiness from '../../components/ServiceBusiness'
import ServiceBusiness2 from '../../components/ServiceBusiness2'
// import Hero from '../../components/Hero'

const SmashBusinessPage = () => {
  return (
    <>
      <div>
        <div className="">
          <Navbar/>
          <SmashBusinessTitle/>
        </div>
          <ServiceBusiness/>
          <ServiceBusiness2/>
        <Footer/>
      </div>
      

    </>
  )
}

export default SmashBusinessPage