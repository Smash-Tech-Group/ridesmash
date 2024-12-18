import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { BiTaxi, BiDownload } from "react-icons/bi";



import banner from "./../assets/Ridesmash-brand.png"
const Hero = () => {
  return (
    <div className="flex md:px-12 p-4 max-w-screen-2xl mx-auto mt-16 md:h-[300px]">
        
        <div className="flex md:flex-row flex-col w-[100%] md:items-center">
            <motion.div 
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                
                className="md:w-3/5 w-full flex flex-col">
                <h1 className="lg:text-6xl md:text-4xl text-4xl text-white font-bold leading-relaxed inter tracking-wide">Ride in Style,</h1>
                <h1  className="lg:text-6xl md:text-4xl text-4xl text-white font-bold roboto-regular tracking-wide">Ride in Comfort</h1>
                {/* <h3 className="text-xl text-gray-300 py-3 font-extralight">We keep lives transformed.</h3> */}
                <h3 className="text-xl text-gray-300 py-3 pb-6 font-extralight">The ultimate ride-sharing solution in Africa.</h3>
                <div className="flex flex-row gap-3 mt-3">
                    <button 
                     className='flex items-center border justify-center hover:bg-primary border-secondary bg-secondary transition-all duration-300 hover:border-primary py-3 px-6 text-primary rounded-full hover:text-white text-xl'> Download App</button>
                    <a href="/driveAndEarn" className='flex items-center border border-secondary justify-center bg-transparent transition-all duration-300 text-secondary py-3 px-6 rounded-full hover:border-primary hover:text-white hover:bg-primary text-xl'> Drive and Earn</a>
                </div>
            </motion.div>
            {/* <motion.div
                variants={fadeIn("left", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
            >
                <img src={banner} alt="" className=""/>
            </motion.div> */}
        </div>
    </div>
  )
}

export default Hero