import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import about from './../assets/cars.png'

const BookingTitle = () => {
  return (
    <div>
        <div className='md:w-full md:h-[180px] flex flex-row justify-between items-center'>
    <div className="w-full items-center md:items-center md:justify-center justify-center md:h-1/3 lg:mx-10">
        <h1 className="text-2xl text-gray-300 md:text-4xl md:font-extrabold roboto ">Download The App to Book a Ride</h1>
   </div>
   
    </div>
    </div>
  )
}

export default BookingTitle