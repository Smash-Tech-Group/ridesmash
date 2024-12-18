import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SupportContent from "../../components/SupportContent"
import SupportTitle from '../../components/supportTitle'

const SupportPage = () => {

  return (
    <>
    <div>
    <div className="md:bg-gradient-to-t md:from-black to-transparent">
      <Navbar/>
      <SupportTitle/>
      </div>  
      <SupportContent/>
      
      <Footer/>
    </div>
  </>
  )
}

export default SupportPage