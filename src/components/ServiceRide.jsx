import Image14 from './../assets/illus14.svg';
import background from '../assets/background2.jpg'
// import background1 from '../assets/background1.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { FaSquare } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ServiceRide = ({currency, country}) => {
  return (
    <div className='flex h-[710px] md:h-full md:py-[4rem] max-w-screen-2xl mx-auto items-center md:justify-center md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white sm:flex-row sm:gap-12 xl:max-h-[598px] 2xl:rounded-5xl;'>
        <LazyLoadImage src={background} alt='image' className='md:w-full md:h-full h-screenresizeMode:"cover"' />
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 md:px-12 absolute md:flex-row-reverse bg-white opacity-90 h-screen md:h-full md:justify-between md:items-center px-3">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <LazyLoadImage src={Image14} alt='' className='z-20'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5 w-full '>
                <h1 className='md:text3xl text-3xl font-bold text-primary  mb-5 leading-normal'>Ride </h1>
                <p className='text-gray-700 text-md lg:text-md mb-4'>Connect with a driver for immediate pick-up and drop-off service within the city.</p>
                <p className='text-gray-700 text-md lg:text-md mb-4'>This service is perfect for everyday commutes, errands, or nights out.</p>

                <p className='text-gray-700 text-md text-primary lg:text-lg mb-4 md:font-bold'>Benefits:</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600 text-md lg:text-md '>Faster than public transport in many cases.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600 text-md lg:text-md'>Cost-effective for single riders.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600 text-md lg:text-md '>Convenient and comfortable door-to-door service.</p>
               </div>
                {/* <button className='bg-secondary text-primary py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Learn More</button> */}
            </motion.div>

        </div>
    </div>
  )
}

export default ServiceRide