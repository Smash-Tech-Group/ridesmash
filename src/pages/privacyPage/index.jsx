import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import TermsAndConditions from '../../components/TermsAndConditions'
import PrivacyTitle from '../../components/PrivacyTitle'
import PrivacyContent from '../../components/PrivacyContent'

const PrivacyPage = () => {
  return (
    <>
      <div>
        <div>
          <Navbar/>
          <PrivacyTitle/>
        </div>
        <PrivacyContent/>  
        <Footer/>
      </div>
      

    </>
  )
}

export default PrivacyPage