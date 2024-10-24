//Confirm Otp Page
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";

export default function ConfirmOtp() {
    return (
        <div className="">
            <Header/>
                <main className="flex flex-col justify-center items-center mt-12 ">
                    <section className="flex flex-col justify-center items-center px-6 sm:max-w-[486px] w-full">
                        {/* Input Fields For OTP */}
                        <form className="flex justify-center items-baseline gap-2 sm:gap-8 my-8">
                            <input type="number" className="border w-[75px] h-[75px] flex items-center justify-center text-center bg-color-thirteen border-color-fourteen rounded-md text-xl text-color-five"/>
                            <input type="number" className="border w-[75px] h-[75px] flex items-center justify-center text-center bg-color-thirteen border-color-fourteen rounded-md text-xl text-color-five" />
                            <input type="number" className="border w-[75px] h-[75px] flex items-center justify-center text-center bg-color-thirteen border-color-fourteen rounded-md text-xl text-color-five" />
                            <input type="number" className="border w-[75px] h-[75px] flex items-center justify-center text-center bg-color-thirteen border-color-fourteen rounded-md text-xl text-color-five" />

                        </form>
                        <p className="text-color-one text-center px-6 lg:px-0 leading-6">Enter OTP code that was sent to your email, <span className="font-bold">segunsolaru@gmail.com</span>.</p>

                        {/* Submit buttton */}
                        <Link href="/reset-password" className="w-full my-12">
                           <FormButton ButtonText="Confirm OTP"/>
                        </Link>

                        <p className="text-center text-color-twelve px-4">Didn't get a code? 
                            <Link href="/get-otp">
                            <span className="text-color-eleven cursor-pointer duration-300 hover:text-color-five px-2">Resend</span>
                            </Link>
                        </p>
                    </section>
                </main>
            <Footer />
        </div>
    )
}