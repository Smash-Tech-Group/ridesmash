import { useState, useRef  } from 'react';
import logo from '../../src/assets/logo.png'
import { BiSupport, BiTaxi, BiChevronDown } from "react-icons/bi";
import {FaXmark, FaBars} from 'react-icons/fa6'
import { NavLink} from 'react-router-dom';


const Navbar = () => {
  

  const navItems = [
    {link : "Home", path : "/"},
    {link : "About Us", path : "about"},
    {link : "Services ", path : "services", icon: <BiChevronDown />,
      submenu: [
        { link: "Hire Purchase", path: "" },
        { link: "Car Rental", path: "" },
        { link: "Fleet Management", path: "" },
        { link: "Ride Hailing", path: "" },
      ]
    },
    {link : "Drive & Earn", path : "driveAndEarn"},
    {link : "Franchise", path : "franchise", icon: <BiChevronDown />,
      submenu: [
        { link: "Read More", path: "" },
        { link: "Sign Up", path: "" }

      ]
    },
    {link : "Book a Ride", path: "booking", icon: <BiTaxi/>},
    {link : "Contact Us", path : "contact"},
  ]

  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggle = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  const [dropdownVisibleIndex, setDropdownVisibleIndex] = useState(null);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const dropdownTimeout = useRef(null); 

  const handleMouseEnter = (index) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    if (!isDropdownClicked) {
      setDropdownVisibleIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isDropdownClicked) {
      dropdownTimeout.current = setTimeout(() => {
        setDropdownVisibleIndex(null);
      }, 300);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownClicked((prev) => !prev);
    if (isDropdownClicked) {
      setDropdownVisibleIndex(null);
    }
  };


  return (
    <>
      <nav className="md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
        <div className="flex justify-between">
          <div className="flex items-center space-x-14 justify-between w-[100%]">
            <a
              href="/"
              className="bg-secondary w-[80px] h-[80px] items-center justify-center flex rounded-xl"
            >
              <img src={logo} alt="" className="w-[60px] h-[60px]" />
            </a>

            {/* Desktop Navigation */}
            <ul className="md:flex items-center space-x-10 hidden">
              {navItems.map(({ link, path, icon, submenu }, index) => (
                <li key={link} className="relative">
                  <a
                    href={path}
                    className="flex items-center transition-all duration-300 hover:text-secondary justify-center gap-1 text-lg"
                  >
                    {link}
                    {icon && (
                      <span
                        className="cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleDropdownToggle}
                      >
                        {icon}
                      </span>
                    )}
                  </a>

                  {/* Dropdown menu */}
                  {submenu && dropdownVisibleIndex === index && (
                    <ul
                      className="absolute top-full left-0 mt-1 bg-primary shadow-md rounded-md text-gray-800 w-[200px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {submenu.map(({ link, path }) => (
                        <li key={link}>
                          <a
                            href={path}
                            className="block px-4 py-2 hover:bg-secondary hover:rounded-md text-white hover:text-primary"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className='md:flex hidden items-center space-x-12'>
              <a href='login' className='transition-all duration-300 bg-secondary py-3 px-8 rounded-full text-primary hover:text-white hover:bg-primary text-xl'>Login</a>
            </div>
            </div>

          

             {/* small screen */}

             <div className='md:hidden'>
                <button onClick={toggle} className=''>
                    {
                      isMenuOpened ? (<FaXmark className='text-4xl'/>) : (<FaBars className='text-4xl'/>)
                    }
                </button>
             </div>

          </div>
          
        </nav>
        <div className={`space-y-4 px-4 pt-0  pb-5 bg-[#020066] flex flex-col gap-1 h-[500px] ${isMenuOpened ? "block top-90 right-0 left-0 " : "hidden"}`}>
          {
            navItems.map(({link, path}) => <a key={link} href={path} className='block hover:text-gray-200 text-white py-1 text-2xl font-extralight'>{link}</a>)
          }
          <div className='flex flex-col gap-3 mb-6'>
            
              {/* <div className='flex items-center gap-3'>
                <BiTaxi className='font-bold text-2md text-white gap-2'/>
                <a href='/booking' className=' text-2xl text-white'>Book a Ride</a>
              </div>  */}
              <a href='login' className='bg-secondary my-6 py-2 px-4 rounded hover:text-white hover:bg-primary text-xl text-center'>Login</a>
            </div>
        </div>

    </>
  )
}

export default Navbar