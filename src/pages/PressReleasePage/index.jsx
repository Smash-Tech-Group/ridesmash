import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FoodTitle from '../../components/FoodTitle'
import ServiceFood from '../../components/ServiceFood'
import PressContentTop from '../../components/PressContentTop'
import PressTitle from '../../components/PressTitle'
import PressContentMiddle from '../../components/PressContentMiddle'
import PressContentBottom from '../../components/PressContentBottom'
import GetDriverApp from '../../components/GetDriverApp'
// import Hero from '../../components/Hero'

const PressReleasePage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <PressTitle/>
        </div>
        <PressContentTop/>
        <PressContentMiddle/>
        <PressContentBottom/>
        <GetDriverApp/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default PressReleasePage