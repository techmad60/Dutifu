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
        <section className="flex flex-col justify-center items-center space-y-12">

          {/* Collect reviews and ratings */}
          <section className="flex flex-col justify-center items-center sm:flex-row gap-8 my-8 lg:gap-2 xl:gap-32">
            <Image 
              src={"/images/feature-1.svg"}
              alt="Illustration"
              className="lg:w-[592px]"
              width={180}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start">
              <h3 className={`${player.className} font-medium text-color-two lg:text-2xl`}>Collect reviews and ratings from customers</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.</p>
            </div>
          </section>

          {/* Symptom Questionnaire */}
          {/* <section className="flex flex-col justify-center items-center sm:flex-row-reverse gap-8 my-8">
            <Image 
              src={"/images/feature-2.svg"}
              alt="Illustration"
              className="lg:w-[307px] h-[316]"
              width={180}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className={`${poppins.className} font-medium text-color-three lg:text-2xl`}>Interactive Symptom Questionnaire</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Our smart AI asks the right follow-up questions to help pinpoint possible conditions.</p>
              <button className="flex items-center text-color-two gap-2 mt-8 lg:text-lg">Let&apos;s go <FaArrowRight className=""/></button>
            </div>
          </section> */}

          {/* Private and Secure */}
          {/* <section className="flex flex-col justify-center items-center sm:flex-row gap-8 my-8">
            <Image 
              src={"/images/feature-3.svg"}
              alt="Illustration"
              className="lg:w-[307px] h-[316]"
              width={180}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className={`${poppins.className} font-medium text-color-three lg:text-2xl`}>Private and Secure</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Your health information is protected with encrypted data transmission and industry-standard security.</p>
              <button className="flex items-center text-color-two gap-2 mt-8 lg:text-lg">Let&apos;s go <FaArrowRight className=""/></button>
            </div>
          </section> */}
        </section>
        
        {/* Testimonials Section */}
        {/* <section className="bg-color-three flex flex-col justify-center items-center py-12 my-12"> */}
          {/* <h2 className={`${poppins.className} text-white font-medium text-xl 
          lg:text-[2rem]`}>What Our Users Say</h2> */}
          {/* <div className="my-8 flex flex-col space-y-14 lg:flex-row lg:space-y-0 lg:space-x-12 lg:my-12"> */}
            {/* Testimonial-one */}
            {/* <div className="bg-white flex flex-col w-[16.5625rem] h-[21.125rem] rounded-lg justify-center px-8">
              <Image 
                src={"/images/quote.svg"}
                alt="Quotation marks"
                className=""
                width={32}
                height={15}
              />
              <p className="font-light text-sm text-center w-[13.5rem] self-center my-8">Symptomify helped me identify what was going on when I wasn&apos;t feeling well. The AI suggested a condition that I hadn&apos;t even considered. It gave me peace of mind and clear next steps!</p>
              <figure className="flex items-center gap-4">
                <Image 
                  src={"/images/user.svg"}
                  alt="User"
                  className=""
                  width={50}
                  height={50}
                />
                <figcaption>
                  <p className={`${poppins.className} text-sm font-bold text-color-two flex flex-col`}>
                    Favour Nnabuife 
                    <span className="text-sm text-color-one font-normal">Pharmacy, 300lvl</span>
                  </p>
                </figcaption>
              </figure>
            </div> */}

            {/* Testimonial-two */}
            {/* <div className="bg-white flex flex-col w-[16.5625rem] h-[21.125rem] rounded-lg justify-center px-8">
              <Image 
                src={"/images/quote.svg"}
                alt="Quotation marks"
                className=""
                width={32}
                height={15}
              />
              <p className="font-light text-sm text-center w-[13.5rem] self-center my-8">Symptomify helped me identify what was going on when I wasn&apos;t feeling well. The AI suggested a condition that I hadn&apos;t even considered. It gave me peace of mind and clear next steps!</p>
              <figure className="flex items-center gap-4">
                <Image 
                  src={"/images/user.svg"}
                  alt="User"
                  className=""
                  width={50}
                  height={50}
                />
                <figcaption>
                  <p className={`${poppins.className} text-sm font-bold text-color-two flex flex-col`}>
                    Favour Nnabuife 
                    <span className="text-sm text-color-one font-normal">Pharmacy, 300lvl</span>
                  </p>
                </figcaption>
              </figure>
            </div> */}

            {/* Testimonial-three */}
            {/* <div className="bg-white flex flex-col w-[16.5625rem] h-[21.125rem] rounded-lg justify-center px-8">
              <Image 
                src={"/images/quote.svg"}
                alt="Quotation marks"
                className=""
                width={32}
                height={15}
              />
              <p className="font-light text-sm text-center w-[13.5rem] self-center my-8">Symptomify helped me identify what was going on when I wasn&apos;t feeling well. The AI suggested a condition that I hadn&apos;t even considered. It gave me peace of mind and clear next steps!</p>
              <figure className="flex items-center gap-4">
                <Image 
                  src={"/images/user.svg"}
                  alt="User"
                  className=""
                  width={50}
                  height={50}
                />
                <figcaption>
                  <p className={`${poppins.className} text-sm font-bold text-color-two flex flex-col`}>
                    Favour Nnabuife 
                    <span className="text-sm text-color-one font-normal">Pharmacy, 300lvl</span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div> */}
        {/* </section> */}
         
         {/* Try Symptomify Section */}
        {/* <section className="flex justify-center flex-col items-center my-12 md:flex-row">
          <div className="flex flex-col justify-center items-center"> */}
            {/* <h2 className={`${poppins.className} text-color-two font-medium text-xl 
            lg:text-[2rem]`}>Try Symptomify Today!</h2>
            <p className="text-color-one text-center font-medium px-8 md:px-0 lg:text-2xl py-4 w-[24.125rem]">Symptomify - Tell me, what&apos;s the matter?</p> */}

            {/* Responsive Try Symptomify Image */}
            {/* <Image 
              src={"/images/Try-Symptomify.svg"}
              alt="Illustration"
              className="lg:w-[307px] h-[316] pt-8 md:hidden"
              width={180}
              height={185.28}
            /> */}
            {/* <button className="flex items-center text-white bg-color-two p-4 rounded-md gap-2 mt-12 sm:mt-4 lg:text-lg">Let&apos;s go <FaArrowRight className=""/></button> */}
          {/* </div> */}
          
          {/* Responsive Large Screen Try Symptomify Image */}
          {/* <Image 
            src={"/images/Try-Symptomify.svg"}
            alt="Illustration"
            className="lg:w-[307px] h-[316] pt-8 hidden md:flex"
            width={280}
            height={185.28}
          /> */}
        {/* </section> */}
      </main>
    )
}