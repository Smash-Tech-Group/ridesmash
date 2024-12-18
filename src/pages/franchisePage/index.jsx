import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FranchiseTitle from '../../components/FranchiseTitle'
import FranchisePartner from '../../components/FranchisePartner'
// import Hero from '../../components/Hero'

const FranchisePage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <FranchiseTitle/>
        </div>
        <FranchisePartner/>  
        <Footer/>
      </div>
      

    </>
  )
}

export default FranchisePage