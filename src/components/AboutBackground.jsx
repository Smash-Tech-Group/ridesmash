import background from '../assets/african-woman.jpg'
import { FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const AboutBackGround = () => {
  return (
    <div className=' flex items-center bg-slate-400 md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white sm:flex-row sm:gap-6 sm:py-12  xl:max-h-[598px] 2xl:rounded-5xl; '>
        <img src={background} alt='image' className='md:w-full md:h-full h-full w-full resizeMode:"cover"' />
        <div className='absolute md:w-1/2 w-full h-full bg-black top-0 left-0 md:rounded-br-full rounded-none opacity-70 flex flex-col'>
         <div className=' flex md:flex-col flex-col md:justify-start md:items-start items-center justify-center md:mx-10 mx-1 md:w-3/4 md:mt-20 mt-4 md:gap-3 gap-1'>
         <div className=' flex flex-col md:flex-col md:gap-6 gap-1 pt-3 w-full items-center md:items-start justify-center md:justify-start' >
              
              <h1 className=" md:text-[60px] text-xl text-white font-bold md:leading-10 inter">Ride in Style,</h1>
              <h1  className=" md:text-[60px] text-xl text-white font-bold inter">Ride in Comfort</h1>
              
          </div>
          <h3 className='text-white md:text-2xl text-base md:mt-6 mt-1 md:mb-3 mb-1'>We Keep lives transformed.</h3>
          <div className="flex flex-col md:flex-row gap-3 mt-3 w-1/2 md:w-full">
                <a href="/driveAndEarn" className='bg-secondary text-primary py-2 md:py-6 px-2 md:px-6 rounded-full hover:text-white hover:bg-primary text-base md:text-xl text-center'>Drive and Earn</a>
                <button className='bg-primary py-2 md:py-6 px-2 md:px-6 text-white rounded-full hover:text-primary hover:bg-secondary text-base md:text-xl'>Download App</button>
          </div>
         </div>
        
        </div>
    </div>
    // <div className=' flex items-center bg-slate-400 md:w-full relative '>
    //     <img src={background} alt='image' className='md:w-full md:h-full resizeMode:"cover"' />
    //     <div className='absolute md:w-1/2 w-full h-full bg-black top-0 left-0 md:rounded-br-full opacity-70'>
    //      <div className='  items-center md:justify-center mx-10  md:ml-40 md:w-3/4 md:h-1/2 h-full md:mt-20 mt-1'>
    //      <div className=' flex flex-col md:flex-col md:gap-4 gap-2 pt-10' >
              
    //           <h1 className="lg:text-5xl md:text-4xl text-4xl text-white font-bold leading-relaxed inter ">RIDE IN STYLE,</h1>
    //           <h1  className="lg:text-5xl md:text-4xl text-4xl text-white font-bold roboto-regular">RIDE IN COMFORT</h1>
              
    //       </div>
    //       <h3 className='text-white md:text-4xl text-base md:mt-6 mt-2 md:mb-3 mb-2'>We Keep lives transformed.</h3>
    //       <div className="flex flex-row gap-3 mt-3">
    //             <a href="/driveAndEarn" className='bg-secondary text-primary py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Drive and Earn</a>
    //             <button className='bg-primary py-2 px-6 text-white rounded hover:text-primary hover:bg-secondary text-xl'>Download App</button>
    //       </div>
    //      </div>
        
    //     </div>
    // </div>
  )
}

export default AboutBackGround