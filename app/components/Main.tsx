import Image from "next/image";
import { player } from "../fonts/fonts";


export default function Main () {
    return (
        <main>
         {/* Hero Section */}
         <section className="flex flex-col items-center justify-center text-center py-8 lg:text-start lg:flex-row lg:px-16 lg:py-[4rem] lg:gap-16 xl:gap-44">
          {/* Text and Button Section */}
           <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <h1 className={`${player.className} text-color-two font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl lg:w-[29.4375rem]`}>
                List and grow your business with just few clicks
                </h1>

                {/* Responsive Hero Image */}
                <Image 
                src="/images/Hero-img.svg" 
                alt="Hero Image"
                className="my-4 lg:hidden" 
                width={180} 
                height={126.37} 
                />

                <p className="text-sm text-color-one px-8 py-4 sm:px-28 md:px-32 lg:px-0 lg:w-[425px] lg:text-xl">
                Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.
                </p>
            </div>

            {/* Large Screen Hero Image */}
            <div className="hidden lg:flex">
                <Image 
                src="/images/Hero-img.svg"
                alt="Hero Image"
                width={500}
                height={56}
                />
            </div>
        </section>
        
        {/* Features Section */}
        <section className="flex flex-col justify-center items-center space-y-36">
          {/* Collect reviews and ratings */}
          <section className="flex flex-col justify-center items-center sm:flex-row gap-8 my-8 lg:gap-2 xl:gap-32">
            <Image 
              src={"/images/feature-1.svg"}
              alt="Illustration"
              className="lg:w-[500px]"
              width={200}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start">
              <h3 className={`${player.className} font-medium text-color-two lg:text-2xl`}>Collect reviews and ratings from customers</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.</p>
            </div>
          </section>
          
          {/* Get Discovered */}
          <section className="flex flex-col justify-center items-center">
            <Image 
              src={"/images/feature-2.svg"}
              alt="Illustration"
              className="lg:w-[900px] xl:w-[1200px]"
              width={200}
              height={185.28}
            />
          </section>

         {/* Accept and sell appointments */}
         <section className="flex flex-col justify-center items-center sm:flex-row gap-12 my-8 lg:gap-2 xl:gap-32">
            <Image 
              src={"/images/features-3.svg"}
              alt="Illustration"
              className="lg:w-[500px]"
              width={200}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start">
              <h3 className={`${player.className} font-medium text-color-two lg:text-2xl`}>Accept and sell appointments</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem] xl:w-[557px]">Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. .</p>
            </div>
          </section>
        </section>
      </main>
    )
}