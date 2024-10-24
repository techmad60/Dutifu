// Pricing Page
// "use client";
// import { useState } from "react";
// import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosCheckmark } from "react-icons/io";
import { FaTimes} from 'react-icons/fa';
// import FormButton from "../components/FormButton";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";



export default function ContactUsPage() {

    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center bg-colour-fifteen">
                <section className="flex flex-col justify-center items-center w-full text-center py-12 bg-white relative">
                    <h1 className={`text-color-two font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl`}>Plans to Suit Your Business Budget</h1>
                    <p className="text-color-one text-lg px-4 sm:px-16 lg:w-[888px]">Our fully organized plans deliver valuable content that showcases your services and skills, drives Lead, covers all features, and gives customers a clear idea to be able to choose your services.</p>   
                </section>

                <section className="flex justify-center items-center w-full py-16 gap-4 rounded-md flex-col lg:flex-row lg:gap-8">
                    {/* Free */}
                    <section className="bg-white w-[280px] p-8 lg:w-[300px] xl:w-[400px]">
                        <div className="my-8">
                            <p className="text-color-two">Basic</p>
                            <h2 className="font-semibold text-color-two text-4xl">Free</h2>
                            <button className="bg-color-three p-4 text-white w-full shadow-md">Get Started</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Access to dashboard</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 2 businesses</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 2 products/services</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 2 Images</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Unlimited Keywords</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display service hours and prices</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display address, contact and email</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Instant chat</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Reviews and ratings</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Profile visibility</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Instant notifications</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display website and social network</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Quotes</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Bookmarks</p>
                            </div>
                        </div>
                        
                    </section>

                    {/* Standard */}
                    <section className="bg-white w-[280px] p-8 lg:w-[300px] xl:w-[400px]">
                        <div className="my-8">
                            <p className="text-color-two">Standard</p>
                            <div className="flex items-center justify-center">
                                <p>&#8358;
                                </p>
                                <h2 className="font-semibold text-color-two text-4xl">20,000</h2>
                                <p>/year</p>
                            </div>
                            
                            <button className="bg-color-three p-4 text-white w-full shadow-md">Get Started</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Access to dashboard</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 6 businesses</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 6 products/services</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 4 Images</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Unlimited Keywords</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display service hours and prices</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display address, contact and email</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Instant chat</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Reviews and ratings</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Profile visibility</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Instant notifications</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display website and social network</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Quotes</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Bookmarks</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Number of Profile Views</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Verified Badge(purple)</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Accept & Sell appointment</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Latest Offers</p>
                            </div>
                        </div>
                        
                    </section>
                    {/* Premium*/}
                    <section className="bg-white w-[280px] p-8 lg:w-[300px] xl:w-[400px]">
                        <div className="my-8">
                            <p className="text-color-two">Premium</p>
                            <div className="flex justify-center items-center">
                                <p>&#8358;
                                </p>
                                <h2 className="font-semibold text-color-two text-4xl">30,000</h2>
                                <p>/year</p>
                            </div>
                            
                            <button className="bg-color-three p-4 text-white w-full shadow-md">Get Started</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Access to dashboard</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 10 businesses</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 10 products/services</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Add up to 6 Images</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display service hours and prices</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display address, contact and email</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Instant chat</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Reviews and ratings</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Access to dashboard</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Profile visibility</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Instant notifications</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Display website and social network</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Quotes</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Bookmarks</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Number of Profile Views</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Verified Badge(gold)</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Accept & Sell appointment</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Latest Offers</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">Latest Offers</p>
                            </div>
                            <div className="flex items-center">
                                <IoIosCheckmark className="text-lg" />
                                <p className="text-color-one">24/7 service and support</p>
                            </div>
                        </div> 
                    </section>
                </section>
                
                <p className="font-semibold text-2xl text-color-two">Features and Overviews</p>
                {/* Features and overviews */}
                <section className="flex justify-center items-center w-full pt-2 pb-16 rounded-md flex-col lg:flex-row lg:items-start">
                    {/* Free */}
                    <section className="w-[280px] p-8 lg:w-[300px] xl:w-[400px]">
                        <div className="my-8">
                            <p className="text-color-two">Basic</p>
                            <button className="bg-color-three p-4 text-white w-full shadow-md">Get Started</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 gap-4 bg-white">
                                <p className="text-color-one whitespace-nowrap">Access to dashboard</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center justify-between gap-4 p-4">
                                <p className="text-color-one">No. of business listing</p>
                                <p>2</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 justify-between bg-white">
                                <p className="text-color-one">No. of products/services</p>
                                <p>2</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 justify-between">
                                <p className="text-color-one">No. of Images</p>
                                <p>2</p>
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">No. of Keywords</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Display service hours and prices</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Display address, contact and email</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Instant chat</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Reviews and ratings</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Profile visibility</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Instant notifications</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Display website and social network</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                                
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Quotes</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Bookmarks</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white ">
                                <p className="text-color-one">Profile views</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Verified badge</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Latest offers</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Accept and sell appointment</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">24/7 support</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                        </div>
                        
                    </section>

                    {/* Standard */}
                    <section className="w-[280px] p-8 lg:w-[300px] xl:w-[400px]">
                        <div className="my-8">
                            <p className="text-color-two">Standard</p>
                            <button className="bg-color-three p-4 text-white w-full shadow-md">Get Started</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 gap-4 bg-white">
                                <p className="text-color-one whitespace-nowrap">Access to dashboard</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center justify-between gap-4 p-4">
                                <p className="text-color-one">No. of business listing</p>
                                <p>6</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 justify-between bg-white">
                                <p className="text-color-one">No. of products/services</p>
                                <p>6</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 justify-between">
                                <p className="text-color-one">No. of Images</p>
                                <p>4</p>
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">No. of Keywords</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Display service hours and prices</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Display address, contact and email</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Instant chat</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Reviews and ratings</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Profile visibility</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Instant notifications</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Display website and social network</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                                
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Quotes</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Bookmarks</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white ">
                                <p className="text-color-one">Profile views</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Verified badge</p>
                                <p>Purple</p>
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Latest offers</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Accept and sell appointment</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">24/7 support</p>
                                <FaTimes className="text-sm flex-shrink-0 text-color-one" />
                            </div>
                        </div>
                    </section>

                    {/* Premium */}
                    <section className="w-[280px] p-8 lg:w-[300px] xl:w-[400px]">
                        <div className="my-8">
                            <p className="text-color-two">Premium</p>
                            <button className="bg-color-three p-4 text-white w-full shadow-md">Get Started</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 gap-4 bg-white">
                                <p className="text-color-one whitespace-nowrap">Access to dashboard</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center justify-between gap-4 p-4">
                                <p className="text-color-one">No. of business listing</p>
                                <p>10</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 justify-between bg-white">
                                <p className="text-color-one">No. of products/services</p>
                                <p>10</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 justify-between">
                                <p className="text-color-one">No. of Images</p>
                                <p>6</p>
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">No. of Keywords</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Display service hours and prices</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Display address, contact and email</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Instant chat</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Reviews and ratings</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Profile visibility</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Instant notifications</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Display website and social network</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                                
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Quotes</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Bookmarks</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white ">
                                <p className="text-color-one">Profile views</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Verified badge</p>
                                <p>Gold</p>
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">Latest offers</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between">
                                <p className="text-color-one">Accept and sell appointment</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                            <div className="flex items-center p-4 justify-between bg-white">
                                <p className="text-color-one">24/7 support</p>
                                <IoIosCheckmark className="text-3xl flex-shrink-0 text-color-eleven" />
                            </div>
                        </div>
                        
                    </section>
                </section>

            </main>
            <Footer margin="mt-0"/>
        </div>
    )
}