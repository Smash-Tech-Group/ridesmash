import { useState } from "react"
import lite from './../assets/coolride.png'
import classic from './../assets/cars.png'
import executive from './../assets/newride.png'
import Switch from '@mui/material/Switch';
import bike from './../assets/ridebike.png'
import van from './../assets/busride.png'
// import truck from './../assets/trucks.png'

const ServiceOption = () => {
  
  //   const [isRide, setIsRide] = useState(false)  

  const [switchChecked, setSwitchChecked] = useState(true);

  const rideOptions = [
    {id: 1, type : 'Smash Regular', image : lite, title : "Affordable and Fast", descrtiption : "Our cheapest ride rate, at your doorstep with all the comfort you can ask for anytime, any day."},
    {id: 2, type : 'Smash Classic', image : classic, title : "Top Request with Ambience", descrtiption : "Classic ride comes with top notch 100% cruise, all classic cars are exotic and classy."},
    {id: 3, type : 'Smash Executive', image : executive, title : "Affordable and Fast", descrtiption : "As the name implies executive rides, for executive or business owner. This service avail business executives to ride without hassle."},
  ]

  const deliveryOptions = [
    {id: 1, type : 'Smash Bike', image : bike, title : "Affordable and Fast", descrtiption : "Our delivery bikes are the cheapest delivery ride rate, delivering all your items to your doorstep"},
    {id: 2, type : 'Smash Car', image : lite, title : "Top Request with Ambience", descrtiption : "Seamless transportation with our classic cars to any destination of your choice for delivery."},
    {id: 3, type : 'Smash Van', image : van, title : "Affordable and Fast", descrtiption : "Van and buses travel long distance to deliver all your items."},
  ]

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto md:py-20 py-8">
        <div className="text-center">
            <h3 className="md:text-5xl text-3xl font-extrabold text-primary mb-2 tracking-wide">Explore Our Services</h3>
            <p className="md:w-1/3 text-tertiary mx-auto px-4">We offer a wide range of services to our riders, this brings with it the ambience and style on every trip.</p>
            <div className="mt-12 relative bg-gray-300 rounded-full w-[305px] mx-auto flex items-center justify-center">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full transition-transform duration-300 ${
              switchChecked ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
          <div className="relative z-10 flex w-full">
            <button
              onClick={() => setSwitchChecked(true)}
              className={`w-1/2 text-center py-3 font-semibold transition-all duration-300 ${
                switchChecked ? "text-white" : "text-gray-600"
              }`}
            >
              RideSmash
            </button>
            <button
              onClick={() => setSwitchChecked(false)}
              className={`w-1/2 text-center py-3 font-semibold transition-all duration-300 ${
                !switchChecked ? "text-white" : "text-gray-600"
              }`}
            >
              Smash Logistic
            </button>
          </div>
        </div>
      </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 md:w-11/12 mx-auto">
            {switchChecked ?
                rideOptions.map((options, index) => 
                <div key={index} className="border py-10 md:px-10 px-4 rounded-lg shadow-3xl transition ease-in-out duration-300">
                    <h3 className="text-3xl font-bold text-center text-primary my-5">{options.type}</h3>
                    <div className="flex item-center justify-center w-[90%]">
                        <img src={options.image} alt="" className="w-[600px] h-[120px] "/>
                    </div>
                    <p className="text-tertiary my-5">{options.descrtiption}</p>
                </div>
                )
                :
                deliveryOptions.map((options, index) => 
                <div key={index} className="border py-10 md:px-10 px-4 rounded-lg shadow-3xl items-center justify-center">
                    <h3 className="text-3xl font-bold text-center justify-center text-primary my-5">{options.type}</h3>
                    <div className="flex item-center justify-center w-[90%] ">
                        <img src={options.image} alt="" className="w-[300px] h-[120px]"/>
                    </div>   
                    <p className="text-tertiary my-5">{options.descrtiption}</p>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default ServiceOption