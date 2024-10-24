//Login Page
"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";
import {FaEye, FaEyeSlash } from "react-icons/fa";



export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    //Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center mt-12 ">
                <section className="flex flex-col justify-center items-center lg:items-start lg:justify-start lg:max-w-[468px] w-full">
                    <p className="text-color-one">Jump right back In!</p>
                    <h1 className="text-color-two font-semibold text-4xl">Get Login</h1>
                </section>
                 
                {/*Login Form */}
                <section className="w-full max-w-[486px]">
                    <form  className={`flex flex-col justify-center px-6 mt-12 mb-6 space-y-8`}>
                        
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Email</label>
                            <input 
                            type="email" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        
                        {/* Password */}
                       <div className="flex flex-col gap-2 ">
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
                                    className="absolute inset-y-0 right-3 flex items-center text-color-eleven duration-300 hover:text-color-five"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <Link href="/forgot-password" className="self-end text-sm text-color-eleven duration-300 hover:text-color-five">Forgot password?</Link>
                        </div>
                        <FormButton ButtonText="Login"/>
                    </form>
                    <p className="text-center text-color-twelve px-4">Don&apos; have an account? 
                        <Link href="/signup">
                        <span className="text-color-eleven cursor-pointer duration-300 hover:text-color-five px-2">Sign up</span>
                        </Link>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    )
}