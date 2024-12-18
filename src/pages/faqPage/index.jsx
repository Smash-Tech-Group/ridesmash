import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FoodTitle from '../../components/FoodTitle'
import ServiceFood from '../../components/ServiceFood'
import FaqTitle from '../../components/FaqTitle'
import FaqContent from '../../components/FaqContent'
// import Hero from '../../components/Hero'

const FaqPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <FaqTitle/>
        </div>
        <FaqContent/>
        <Footer/>
      </div>
      

    </>
  )
}

export default FaqPage