import background from '../assets/background1.jpg'
import rider from '../assets/rider.png'
import android from '../assets/android.svg'
import apple from '../assets/apple.svg'
import Button from './Button'

const BookingRide = () => {
  return (
    <div className=' flex items-center bg-slate-400 md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat py-12 text-white sm:flex-row sm:gap-12 sm:py-24  xl:max-h-[598px] 2xl:rounded-5xl;'>
        <img src={background} alt='image' className='md:w-full md:h-full resizeMode:"cover"' />
        <div className='absolute md:w-full w-full h-full bg-black top-0 left-0 opacity-80 md:flex md:flex-row flex flex-col gap-3 px-3'>
           <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-3 md:gap-12 md:px-12 px-6 pt-6 ">
              <h2 className="text-[40px] font-[700] leading-[100%] text-xl md:text-[64px] md:font-[700] md:leading-[100%] xl:w-[420px]  "> Get Rider App free now!</h2>
              <p className="text-[16px] font-[400] text-gray-10">Available on ios and Android</p>
              <div className='flex w-full flex-row gap-3 whitespace-nowrap xl:flex-row md:justify-center md:items-center  '>

                  <Button
                    type="button"
                    title="Play store"
                    icon={android}
                    variant="border-gray-20 bg-green-90 px-8 py-5 text-white"
                    full
                    color ="text-white"
                  />
                  <Button
                    type="button"
                    title="Apple store"
                    icon={apple}
                    variant="border-white bg-white px-8 py-3 text-green"
                    full
                    color = "text-green-600"
                  />

                
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">

              <img 
                src={rider} 
                alt=""
                width={550}
                height={870}
              />

            </div>
        
        </div>
    </div>
  )
}

export default BookingRide