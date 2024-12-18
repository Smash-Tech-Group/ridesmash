import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FranchisePartner from '../../components/FranchisePartner'
import TermsAndConditionsTitle from '../../components/TermsAndConditionsTitle'
import TermsAndConditions from '../../components/TermsAndConditions'
// import Hero from '../../components/Hero'

const TermsAndConditionsPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <TermsAndConditionsTitle/>
        </div>
        <TermsAndConditions/>  
        <Footer/>
      </div>
      

    </>
  )
}

export default TermsAndConditionsPage