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
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <div className="w-full md:w-4/5 md:pr-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            { Array.from({ length: 20 }).map((item, key) => (
                <div key={key}>
                  <div className="flex flex-col justify-center">
                    <div>
                      <img 
                        src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                        width={100}
                        alt='Product Image'
                        height={100}
                      />
                    </div>
                    <div className="">
                      <p>
                        Bell Pepper
                      </p>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>

          <div className="w-full md:w-1/5">
            <div className="flex flex-col space-y-4">
              <div className="border border-gray-300 shadow-sm rounded-md p-4">
                <div className="space-y-2 pb-2">
                  <h3 className="font-semibold">
                    Categories
                  </h3>
                  <div className="w-full h-0.5 relative bg-gray-300 rounded-full">
                    <div className="w-[30%] h-0.5 relative bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className='pt-2 space-y-1.5'>
                  {
                    Array.from({ length: 10 }).map((item, key) => (
                      <a href="#" key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-1.5 space-x-1.5">
                        <span className="text-xs font-medium text-gray-600">Fresh fruits</span>
                        <span>
                          <span className="badge badge-success badge-xs font-medium text-white">100</span>
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default page

