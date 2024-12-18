import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import ContactUsTitle from '../../components/ContactUsTitle'
import ContactContent from '../../components/ContactContent'
// import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const ContactUsPage = () => {
  return (
    <>
    <div>
      <div className="md:bg-gradient-to-t md:from-black to-transparent">
        <Navbar/>
        <ContactUsTitle/>
      </div>
        <ContactContent/>
        <Footer/>
    </div>
    </>
  )
}

export default ContactUsPage