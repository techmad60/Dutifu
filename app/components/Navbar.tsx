// Navbar Component
'use client'
import {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaTimes, FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar () {
    
    const [isNavOpen, setIsNavOpen] = useState(false);
    useEffect(() => {
        // Add or remove a class to the body and html to disable/enable scrolling
        const body = document.body;
        const html = document.documentElement;
    
        if (isNavOpen) {
          body.style.overflow = 'hidden';
          html.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'visible';
          html.style.overflow = 'visible';
        }
        // Clean up the effect on component unmount
        return () => {
          body.style.overflow = 'visible';
          html.style.overflow = 'visible';
        };
    }, [isNavOpen])
 
    //Toggle Nav
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //Check if Link is Active
  const pathname = usePathname()
  const isActiveLink = (href: string) => pathname === href;

  // Conditionally render search icon (not on signup page)
  const shouldShowSearchIcon = pathname !== '/signup' && pathname !== '/login' && pathname != '/forgot-password' && pathname!= '/get-otp' && pathname!= '/confirm-otp' && pathname!= '/reset-password';


  return (
    <nav className={`lg:flex justify-between lg:self-center items-baseline`}>
        <div className="flex justify-between items-center">
            <div className="flex">
                <Image 
                className="logo lg:w-[120px]"
                src={"/images/logo.svg"}
                alt="Dutiful Logo"
                width={50}
                height={10}/>
            </div>
            <div className="cursor-pointer lg:hidden" onClick={handleToggleNav}>
            <FaBars className='text-color-one'/>
            </div>
        </div>

        {isNavOpen && (
            <div
            className="fixed top-0 left-0 w-[25vw] min-h-screen bg-black opacity-50 z-50 lg:hidden"
            onClick={handleToggleNav} 
            />
        )}
        <div className={`bg-color-three absolute top-0 right-0 h-screen flex flex-col items-center p-4 w-3/4 z-40 lg:w-auto lg:flex-row lg:static lg:h-auto lg:bg-transparent lg:p-0 ${isNavOpen ? 'fixed' : 'hidden lg:flex'} `}>
           <button onClick={handleToggleNav} className="lg:hidden">
            <FaTimes size={24} className='text-white'/>
            </button>
            <div className="flex flex-col text-white my-12 text-center text-lg leading-[3.75rem] lg:text-color-one lg:flex-row lg:text-sm lg:my-4 lg:gap-8 xl:gap-20">
                <div className='flex flex-col lg:flex-row items-center justify-between lg:space-x-6 lg:text-lg xl:space-x-12'>
                    {/* Conditionally render search icon */}
                    {shouldShowSearchIcon && (
                        <>
                            <Image 
                            className="lg:hidden my-4"
                            src={"/images/search-light.svg"}
                            alt="Search icon"
                            width={32}
                            height={32}
                            />
                            <Image 
                            className="hidden lg:flex"
                            src={"/images/Search.svg"}
                            alt="Search icon"
                            width={32}
                            height={32}
                            />
                        </>
                    )}
                    <Link href="/" className={`${isActiveLink('/') ? 'text-color-six lg:text-color-three border-b border-color-six lg:border-color-three' : ''} hover:text-color-six lg:hover:text-color-three transition duration-150 hover:ease-in`}>
                        Business Directory
                    </Link>
                    <Link href="/" className={`${isActiveLink('/features') ? 'text-color-six lg:text-color-three border-b border-color-six lg:border-color-three' : ''} hover:text-color-six lg:hover:text-color-three transition duration-150 hover:ease-in`}>
                        Features
                    </Link>
                    <Link href="/pricing" className={`${isActiveLink('/pricing') ? 'text-color-six lg:text-color-three border-b border-color-six lg:border-color-three' : ''} hover:text-color-six lg:hover:text-color-three transition duration-150 hover:ease-in`}>
                        Pricing
                    </Link>
                    <Link href="/" className={`${isActiveLink('/blog') ? 'text-color-six lg:text-color-three border-b border-color-six lg:border-color-three' : ''} hover:text-color-six lg:hover:text-color-three transition duration-150 hover:ease-in`}>
                        Blog
                    </Link>
                </div>
            
                <div className="flex flex-col space-y-6 mt-12 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-center lg:mt-0 rounded-md text-center">
                    <Link href="/login" className="lg:px-4 lg:py-2 rounded-md hover:text-color-six hover:border-color-six transition duration-150 hover:ease-in text-white font-medium border border-white lg:text-lg lg:border-none lg:text-color-four lg:hover:text-color-five">
                    Login
                    </Link>
                    <Link href="/signup" className="transition duration-150 hover:ease-in text-color-three bg-white border border-color-five font-medium rounded-md px-[3.25rem] hover:bg-color-six hover:text-color-five lg:text-lg lg:px-[2rem] lg:py-[1.0625rem] lg:text-color-five xl:px-[3.25rem] lg:hover:bg-color-five lg:hover:text-white">
                    Sign up
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}