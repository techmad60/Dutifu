// Sign-Up Page
"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Check from "../components/Check";
import { FaStore } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";


export default function SignupPage() {

    //Toggle active functionality
    const [active, setActive] = useState("regular");

    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center">
                <section className="flex flex-col justify-center items-center" >
                    <p className="text-color-one">Sign up for free!</p>
                    <h1 className="text-color-two font-semibold text-2xl">Get Started</h1>
                    <div className="flex gap-2 lg:gap-8 relative my-12">
                        <div 
                            className={`flex items-center gap-2 lg:gap-6 p-4 lg:px-[1.375rem] lg:py-[1.875rem] rounded-xl whitespace-nowrap cursor-pointer ${active === 'regular' ? 'text-color-two border border-color-five' : 'text-color-eight border-color-eight'}`}
                            onClick={() => setActive('regular')}
                        >
                            <FaRegUser />
                            <p>Regular User</p>
                        </div>
                        <div 
                            className={`flex items-center gap-2 lg:gap-6 p-4 lg:px-[1.375rem] lg:py-[1.875rem] rounded-xl whitespace-nowrap cursor-pointer ${active === 'service' ? 'text-color-two border border-color-five' : 'text-color-eight border-color-eight'}`}
                            onClick={() => setActive('service')}
                        >
                            <FaStore />
                            <p>Service Provider</p>
                        </div>

                        <Check position={active === 'regular' ? 'left' : 'right'} />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}