//Forgot Password Page
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";



export default function ForgotPasswordPage() {
    return (
        <div className="">
            <Header/>
            <main className="flex flex-col justify-center items-center mt-12 ">
                <section className="flex flex-col justify-center items-center lg:items-start lg:justify-start lg:max-w-[468px] w-full">
                    <Link href="/login" className="border text-color-five rounded-full p-3 hover:bg-color-five hover:text-white duration-300 self-start m-8 lg:mx-0">
                        <FaArrowLeftLong className=""/>
                    </Link>
                    <h1 className="text-color-two font-semibold text-4xl">Forgot Password</h1>
                    <p className="text-color-one px-12 lg:px-0">Enter your email and we'll send you a mail on how to reset your password.</p>
                </section>
                 
                {/*Forgot Password Form */}
                <section className="w-full max-w-[486px]">
                    <form  className={`flex flex-col justify-center px-6 mt-12 mb-6 space-y-8`}>
                        
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-color-five">Email</label>
                            <div className="relative">
                                <input 
                                type="email" 
                                required 
                                autoFocus 
                                className="rounded-sm border-2 h-[56px] border-color-nine bg-color-ten p-2 w-full"/>
                                <div className="absolute inset-y-0 right-3 flex items-center">
                                    <CiMail className="text-color-eleven"/>
                                </div>
                               
                            </div>
                        </div>
                        {/* Submit buttton */}
                        <Link href="/get-otp">
                            <FormButton ButtonText="Send email"/>
                        </Link>
                        
                    </form>
                    <p className="text-center text-color-twelve px-4">Or 
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