// Contact Us Page
"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";



export default function ContactUsPage() {
    const [isArrowUp, setIsArrowUp] = useState(true);
    
    // Toggle the state
    const handleArrowClick = () => {
    setIsArrowUp(!isArrowUp); 
    };
    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center">
                <section className="bg-color-three w-full text-center py-12 relative pb-40">
                    <h1 className={`text-white font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl`}>Get in touch with us</h1>
                    <p className="text-white text-lg px-4 sm:px-16">We are here to support you throughout the process of getting your business listed.</p>
                      
                    {/* Contact Us Section */}
                    <section className="flex flex-col justify-center items-center gap-8 mt-20 md:flex-row absolute inset-x-0">
                        {/* Customer Support */}
                        <div className="flex flex-col justify-start items-center w-[200px] bg-white p-4 h-[200px] border border-color-thirteen rounded-md lg:w-[250px] shadow-md">
                            <div className="flex items-center gap-2">
                                <Image 
                                    src="/images/customer-support.svg" 
                                    alt="Customer suport Image"
                                    className="" 
                                    width={18} 
                                    height={18} 
                                />
                                <p className="font-medium text-color-two lg:text-xl whitespace-nowrap">Customer Support</p>
                            </div>
                            <p className="text-color-one text-sm py-4 lg:text-lg">Please fill out the form below</p>
                        </div>

                        {/* Business Address */}
                        <div className="flex flex-col justify-start items-center w-[200px] bg-white p-4 h-[200px] border border-color-thirteen rounded-md lg:w-[250px] shadow-md">
                            <div className="flex items-center gap-2">
                                <Image 
                                    src="/images/business-address.svg" 
                                    alt="Business Address Image"
                                    className="" 
                                    width={18} 
                                    height={18} 
                                />
                                <p className="font-medium text-color-two lg:text-xl">Business address</p>
                            </div>
                            <p className="text-color-one text-sm py-4 lg:text-lg">Suites (C113 & C114) Akord Shopping Mall,
                            Bogije, Elemoro, 101001, 
                            Lagos, Nigeria</p>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col justify-start items-center w-[200px] bg-white p-4 h-[200px] border border-color-thirteen rounded-md lg:w-[250px] shadow-md">
                            <div className="flex items-center gap-2">
                                <Image 
                                    src="/images/phone.svg" 
                                    alt="Phone Image"
                                    className="sm: w-[]48" 
                                    width={18} 
                                    height={18} 
                                />
                                <p className="font-medium text-color-two lg:text-xl">Phone number</p>
                            </div>
                            <p className="text-color-one text-sm py-4 lg:text-lg">+234 903 921 6724</p>
                        </div>
                        
                    </section>
                </section>
                {/* Contact Us Form*/}
                <section className="w-full max-w-[486px] mt-[36rem] md:mt-32">
                    <form  className={`flex flex-col justify-center px-6 mt-12 mb-6 space-y-8`}>
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Full Name</label>
                            <input 
                            type="name" 
                            name="name" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Email</label>
                            <input 
                            type="email" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        
                        {/* Business Type */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Business Type <span className="italic">(Optional)</span></label>
                            <input 
                            type="text" 
                            name="business type" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>

                        {/*Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Subject</label>
                            <div className="relative">
                                <input 
                                type="email" 
                                required 
                                autoFocus 
                                className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2 w-full"/>
                                <button className="absolute inset-y-0 right-3 flex items-center text-color-eleven hover:text-color-five"
                                onClick={handleArrowClick}>
                                    {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </button>
                            </div>
                           
                        </div>
                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Message</label>
                            <textarea 
                              name="message" 
                              rows={5} 
                              required 
                              className="rounded-sm border-2 border-color-nine bg-color-ten p-2 w-full"
                              placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <FormButton ButtonText="Send Message"/>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}