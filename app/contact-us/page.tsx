// Contact Us Page
"use client";
//import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";



export default function ContactUsPage() {

    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center mt-12 ">
                <section>
                    <h1>Get in touch</h1>
                    <p>We are here to support you throughout the process of getting your business listed.</p>
                </section>
                {/* Contact Us Form*/}
                <section className="w-full max-w-[486px]">
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
                        
                        {/* Phone Number */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Business Type</label>
                            <input 
                            type="text" 
                            name="business type" 
                            required 
                            autoFocus 
                            className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2"/>
                        </div>
                        <FormButton ButtonText="Sign up"/>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}