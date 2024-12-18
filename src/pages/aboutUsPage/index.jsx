import React from 'react'
import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
// import AboutSubHeader from '../../components/AboutSubheader'
import AboutTitle from '../../components/AboutTitle'
import AboutVision from '../../components/AboutVision'
import Footer from "../../components/Footer"
import FeaturesAndBenefits from '../../components/FeaturesAndBenefits'
// import Hero from '../../components/Hero'

const AboutUsPage = () => {
  return (
    <>
      <div>
        <div className="md:bg-gradient-to-t md:from-black to-transparent">
          <Navbar/>
          <AboutTitle/>
        </div>
       
        <AboutSubHeader/>
        <FeaturesAndBenefits/>
        <AboutVision/>

        <Footer/>
      </div>
      

    </>
  )
}

export default AboutUsPage