//Get Otp Page
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer"
import FormButton from "../components/FormButton";

export default function GetOtp() {
    return (
        <div className="">
            <Header/>
                <main className="flex flex-col justify-center items-center mt-12 ">
                    <section className="flex flex-col justify-center items-center px-6 sm:max-w-[408px]">
                        <Image 
                            className="my-4"
                            src={"/images/email-icon.svg"}
                            alt="Email icon"
                            width={139}
                            height={139}
                            />
                        <p className="text-color-one text-center px-12 lg:px-0 leading-6">An OTP code has been sent to <span className="font-bold">segunsolaru@gmail.com</span>. 
                        Check your email to get the code</p>

                        {/* Submit buttton */}
                        <Link href="/confirm-otp" className="my-12 w-full">
                           <FormButton ButtonText="Next"/>
                        </Link>
                    
                    </section>
                </main>
            <Footer />
        </div>
    )
}