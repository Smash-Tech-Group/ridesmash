import React from 'react';

const AboutSubHeader = () => {
  return (
    <div className=' items-center justify-between py-20 px-8 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
        <div className='flex flex-col md:pr-6'>
            <div>
                
                <h2 className="text-stone-900 font-semibold text-xl text mb-4">RIDESMASH COMPANY MISSION </h2>
            </div>
            
            <h1 className="text-stone-900 md:text-5xl text-3xl roboto my-6">Experience Comfort as you Ride in Style</h1>

            <p className='text-lg text-gray-500 mb-6'>

            Ridesmash is an indigenous mobile ridesharing app company for Africa that  operates as a taxi solution with an international standard to provide a smarter  solution in the transport system within the country and beyond. The company’s  transport-tech app Ridesmash provides a special need that solves a major  challenge in the taxi services. 

            </p>
            <p className='text-lg text-gray-500 mb-6'>
            We want to provide people in the community and guests with a trustworthy  means of transportation. We are proud to safely get our customers from Point A  to Point B without misleading them along the way. 

            </p>
        </div>
        <div>
            

            <p className='text-lg text-gray-500 mb-6'>
            
            In today’s world of exponential change, we believe what you see matters more  than what you say. Ridesmash is passionate about connecting with people’s  need to provide cost-effective and innovate total tech solution in the transport  system and translates this solution to their operations and logistics, smoothing its  implementations without operational risks. 
            </p>

          

        </div>
    </div>
  )
}

export default AboutSubHeader;