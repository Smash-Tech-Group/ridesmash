import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SmashwiseTitle from '../../components/SmashwiseTitle'
import Smashwise from '../../components/Smashwise'
// import Hero from '../../components/Hero'

const SmashwisePage = () => {
  return (
    <>
      <div>
        <div className="">
          <Navbar/>
          <SmashwiseTitle/>
        </div>
          <Smashwise/>
        <Footer/>
      </div>
      

    </>
  )
}

export default SmashwisePage