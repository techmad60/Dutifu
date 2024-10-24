// Sign-Up Page
"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Check from "../components/Check";
import CheckBox from "../components/Checkedbox";
import EmptyBox from "../components/UncheckedBox";
import FormButton from "../components/FormButton";
import { FaStore, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";


export default function SignupPage() {

    //Toggle active functionality
    const [active, setActive] = useState("regular");
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    //Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    

    // Toggle the checkbox state
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center mt-12 ">
                <section className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
                    <p className="text-color-one">Sign up for free!</p>
                    <h1 className="text-color-two font-semibold text-2xl">Get Started</h1>
                    <div className="flex gap-2 lg:gap-8 relative mt-8 self-center">

                        {/* Regular User */}
                        <div 
                            className={`flex items-center gap-2 lg:gap-6 p-4 lg:px-[1.375rem] lg:py-[1.875rem] rounded-xl whitespace-nowrap cursor-pointer ${active === 'regular' ? 'text-color-two border border-color-five' : 'text-color-eight border-color-eight'}`}
                            onClick={() => setActive('regular')}
                        >
                            <FaRegUser />
                            <p>Regular User</p>
                        </div>

                        {/* Service Provider */}
                        <div 
                            className={`flex items-center gap-2 lg:gap-6 p-4 lg:px-[1.375rem] lg:py-[1.875rem] rounded-xl whitespace-nowrap cursor-pointer ${active === 'service' ? 'text-color-two border border-color-five' : 'text-color-eight border-color-eight'}`}
                            onClick={() => setActive('service')}
                        >
                            <FaStore />
                            <p>Service Provider</p>
                        </div>

                        {/* Check Component */}
                        <Check position={active === 'regular' ? 'left' : 'right'} />
                    </div>
                </section>
                 
                {/* Sign Up Form */}
                <section className="w-full max-w-[486px]">
                    <form  className={`flex flex-col justify-center px-6 my-12 space-y-8`}>
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Full Name</label>
                            <input 
                            type="name" 
                            name="name" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Email</label>
                            <input 
                            type="email" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Phone Number</label>
                            <input 
                            type="tel" 
                            name="phone number" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        

                       <div className="flex flex-col gap-2">
                            <label className="text-color-five">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    required 
                                    className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2 w-full" 
                                />
                                <button 
                                    type="button" 
                                    onClick={togglePasswordVisibility} 
                                    className="absolute inset-y-0 right-3 flex items-center text-color-eleven"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="text-color-eleven">Re-enter Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    required 
                                    className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2 w-full" 
                                />
                                <button 
                                    type="button" 
                                    onClick={togglePasswordVisibility} 
                                    className="absolute inset-y-0 right-3 flex items-center text-color-eleven"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Toggle between EmptyBox and CheckBox based on state */}
                            <div onClick={toggleCheckbox} className="cursor-pointer">
                                {isChecked ? <CheckBox /> : <EmptyBox />}
                            </div>
                            <p className="text-sm cursor-pointer duration-300 hover:text-primary-color">
                            I agree to dutiful's <span className="text-color-eleven pb-2 border-b border-color-eleven">terms and conditions.</span>
                            </p>
                        </div>
            
                    <FormButton ButtonText="Login"/>
                    </form>
                    <p className="mt-8 text-center text-color-twelve px-4">Already have an account? 
                        <Link href="/login">
                        <span className="text-color-eleven cursor-pointer duration-300 hover:text-color-five px-2">Login</span>
                        </Link>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    )
}