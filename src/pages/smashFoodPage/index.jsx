import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FoodTitle from '../../components/FoodTitle'
import ServiceFood from '../../components/ServiceFood'
// import Hero from '../../components/Hero'

const SmashFoodPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <FoodTitle/>
        </div>
        <ServiceFood/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default SmashFoodPage