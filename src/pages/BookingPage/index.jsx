import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import BookingRide from '../../components/BookingRide'
import BookingDrive from '../../components/BookingDrive'
import BookingTitle from '../../components/BookingTitle'
import Footer from "../../components/Footer"

const BookingPage = () => {

  return (
    <>
    <div className="">
    <div>
      <Navbar/>
      {/* <BookingTitle/> */}
    </div>
      
      <BookingRide/>
      <Footer/>

    </div>
  </>
  )
}

export default BookingPage