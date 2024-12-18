import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Socials = () => {

  return (

         <div className='flex md:flex-row flex-col md:justify-between mx-auto md:px-14 p-4 md:max-w-screen-2xl text-primary'>
            
            <div>

            </div>

            <div className='  flex md:space-x-14 space-x-5 items-center justify-between md:gap-12 gap-4  bg-primary py-6 px-3 md:px-10'>
                <div className='flex items-center justify-between gap-1'>

                    <FiPhoneCall  className="text-white font-bold text-lg lg:text-2xl"/>
                    <a href='/booking' className="text-white text-sm md:text-xl">070-RIDESMASH.COM</a>
                </div>
                <div className='flex items-center justify-between gap-1 lg:gap-2'>
                    <MdEmail  className="text-white font-bold text-base"/>
                    <a href='/support' className="text-white  md:text-xl text-sm">info@ridesmash.com</a>
                </div>
            </div>

        </div>
  )
}

export default Socials