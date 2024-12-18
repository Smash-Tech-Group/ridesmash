import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SafetyTitle from '../../components/SafetyTitle'
import SafetyContentTop from '../../components/SafetyContentTop'
import SafetyContentMiddle from '../../components/SafetyContentMiddle'
// import Hero from '../../components/Hero'

const SafetyPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <SafetyTitle/>
        </div>
        <SafetyContentTop/>
        <SafetyContentMiddle/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default SafetyPage