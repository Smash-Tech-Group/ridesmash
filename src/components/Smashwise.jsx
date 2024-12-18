import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const Smashwise = ({currency, country}) => {

  return (
    <div className="flex md:px-14 p-4  mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
{/*            
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div> */}

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-2xl font-bold text-gray-500 mb-5 leading-normal'>Smashwise:     Your One-Stop Shop for Everything E-commerce
                </h1>


                <p className='text-gray-500 text-lg mb-4'>Smashwise isn’t just another online marketplace; it's your gateway to a vibrant world of commerce! Whether you're a seasoned shopper or just starting your e-commerce journey, Smashwise offers a convenient, secure, and diverse platform to fulfill all your needs.</p>

                <p className='text-gray-500 text-lg mb-4 md:font-bold'>Here's what makes Smashwise stand out:</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-lg '><span className='font-[500]'>Local Focus: </span>Smashwise is dedicated to empowering African businesses and entrepreneurs. You'll find a treasure trove of unique products from African sellers, supporting the continent's creative spirit.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-lg '><span className='font-[500]'>Global Reach: </span>Despite its local focus, Smashwise allows you to connect with the world. Showcase your own African-made products to a global audience, or explore exciting items from other countries.
</p>
               </div>
              <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-lg '><span className='font-[500]'>Wide Variety: </span>Find anything your heart desires on Smashwise! From fashion and beauty products to electronics, cars, homeware, art, and even groceries, the platform boasts a vast selection of categories to satisfy every shopper.
</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-lg '><span className='font-[500]'>Seamless Experience: </span>Smashwise prioritizes user experience. Enjoy a user-friendly interface, secure payment options, and efficient delivery systems for a smooth shopping experience from start to finish.
</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-lg '><span className='font-[500]'>Competitive Prices: </span>Smashwise fosters a competitive marketplace, potentially offering you the best deals on a wide range of products.</p>
               </div> 

            </div>

        </div>
    </div>
  )
}

export default Smashwise


