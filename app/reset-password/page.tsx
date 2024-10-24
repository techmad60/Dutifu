//Reset Password Page
"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";
import {FaEye, FaEyeSlash } from "react-icons/fa";



export default function ResetPasswordPage() {
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
                    <h1 className="text-color-two font-semibold text-4xl">Reset Password</h1>
                    <p className="text-color-one">Set your new password</p>
                </section>
                 
                {/*Reset Password Form */}
                <section className="w-full max-w-[486px]">
                    <form  className={`flex flex-col justify-center px-6 mt-12 mb-6 space-y-8`}>
                        
                        
                        {/*Enter New Password */}
                       <div className="flex flex-col gap-2 ">
                            <label className="text-color-five">Enter new password</label>
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
                        </div>

                        {/*Repeat Password */}
                        <div className="flex flex-col gap-2 ">
                            <label className="text-color-five">Re-enter new password</label>
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
                        </div>
                        <Link href="login">
                            <FormButton ButtonText="Reset Password"/>
                        </Link>
                        
                    </form>
                    <p className="text-center text-color-twelve px-4">Or 
                        <Link href="/signup">
                        <span className="text-color-eleven cursor-pointer duration-300 hover:text-color-five px-2">Create new account</span>
                        </Link>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    )
}