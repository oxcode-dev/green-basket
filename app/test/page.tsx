import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { BenefitSection } from '@/sections/BenefitSection'
import { Quicksand } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});



export const page = () => {
  return (
    <div>
      <Header />

      <div className="container w-full mx-auto py-8">
        <div className="w-full flex relative h-full">

            <div className="relative z-50 py-22 space-y-6 px-24 flex flex-col justify-center w-full md:max-w-xl">

              <p className={`text-4xl font-bold capitalize ${quicksand.className}`}>
                We serve fresh & organic foods
              </p>
              <p className={`${quicksand.className} text-2xl font-semibold capitalize`}>
                Fresh Items with big discount
              </p>

              <Link href="#" className="btn btn-success rounded w-32 text-white">
                Shop Now
              </Link>

            </div>

            <div className="absolute rounded-lg right-0 left-0">
              <Image
                className="w-full rounded-lg"
                src="/Background.png"
                alt="Next.js logo"
                width={500}
                height={350}
                priority
                layout="responsive"
              />
            </div>

        </div>
        
      </div>

      <BenefitSection />

      <div className="container w-full mx-auto py-8">
        
      </div>


      <Footer />
    </div>
  )
}

export default page

