//import Image from "next/image";
//import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaApple, FaGooglePlay} from 'react-icons/fa';
import { FaXTwitter, FaYoutube} from "react-icons/fa6";
import { PiLinkedinLogoFill, PiInstagramLogoThin } from "react-icons/pi";


export default function Footer (){
    return (
        <footer className="bg-color-three text-white pt-16 px-16 mt-20 flex flex-col lg:justify-center lg:items-center">
            <nav className="flex flex-col justify-start items-start space-y-12 border-b my-8 border-color-seven py-8 lg:flex-row lg:space-y-0 lg:gap-56" aria-label="footer-nav">

                {/* Contact Section */}
                <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium`}>Contact Us</p>
                    <ul className="text-color-six">
                        <li className=""><a href="">About</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </section>

                {/* Quick Link Section */}
                <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium`}>Quick links</p>
                    <ul className="text-color-six">
                        <li><a href="">Find Services</a></li>
                        <li><a href="">Pricing & plans</a></li>
                        <li><a href="">List your business</a></li>
                    </ul>
                </section>

                {/* Resources Section */}
                <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium`}>Resources</p>
                    <ul className="text-color-six">
                        <li><a href="">Blog</a></li>
                        <li><a href="">Affiliate Program</a></li>
                    </ul>
                </section>

                {/* More From Dubai */}
                <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium`}>More from Dutiful</p>
                    <ul className="text-color-six">
                        <li><a href="">Dutiful jobs</a></li>
                    </ul>
                </section>
            </nav>

            <div className='flex flex-col lg:mx-12 border-b border-color-seven gap-12 lg:gap-[40rem] lg:flex-row pb-8'>
            {/* Socials Section */}
                <section className="flex flex-col ">
                    <nav className="flex flex-col gap-6 lg:flex-row">
                        <p className='font-medium'>Follow us</p>
                        <ul className="flex space-x-8">
                            <li><a href="" className="text-2xl"><FaFacebookF/></a></li>
                            <li><a href="" className="text-2xl"><PiInstagramLogoThin/></a></li>
                            <li><a href="" className="text-2xl"><FaXTwitter/></a></li>
                            <li><a href="" className="text-2xl"><FaYoutube/></a></li>
                            <li><a href="" className="text-2xl"><PiLinkedinLogoFill/></a></li>
                           
                        </ul>
                    </nav>
                </section>

            {/*Download section*/}
                <section className="flex flex-col">
                    <nav className="flex flex-col gap-6 lg:flex-row">
                    <p className='font-medium'>Download the app</p>
                        <ul className="flex space-x-6">
                            <li><a href="" className="text-2xl"><FaApple/></a></li>
                            <li><a href="" className="text-2xl"><FaGooglePlay/></a></li>
                        </ul>
                    </nav>
                </section>
            </div>
             
            {/* Copyright Section */}
            <div className='flex flex-col justify-center items-center gap-24 my-12 lg:flex-row self-start mx-12'>
                <p>©  2022 Dutiful®</p>
                <div className='flex flex-col text-color-six text-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                </div>
                
            </div>
        </footer>
    )
}