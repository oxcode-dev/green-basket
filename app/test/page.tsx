import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { BenefitSection } from '@/sections/BenefitSection'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
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
          <div className="w-full md:w-4/5 md:pr-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 sm:gap-4">
            { Array.from({ length: 20 }).map((item, key) => (
                <div key={key}>
                  <div className="product-card flex flex-col justify-center rounded-md border border-gray-300">
                    <div className="flex flex-col justify-center items-center">
                      <img 
                        src="https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg"
                        width={160}
                        alt='Product Image'
                        height={160}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-2 py-6">
                      <p className="text-gray-800 font-semibold text-lg">
                        Bell Pepper
                      </p>
                      <p className="cart-text text-gray-400 text-md font-medium">
                        $100.00
                      </p>

                      <div className="inline-flex space-x-3 py-1 cart-btn">
                        <a href="#" className="inline-flex justify-center items-center bg-green-600 text-white size-6.5 p-1 rounded-full">
                          <ShoppingCartIcon className="size-3.5" />
                        </a>
                        <a href="#" className="inline-flex justify-center items-center bg-green-600 text-white size-6.5 p-1 rounded-full">
                          <HeartIcon className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            </div>

            <div className="py-8 flex justify-center">
              <button className="btn btn-pill">
                View More
              </button>
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
                    <div className="w-[30%] h-0.5 relative bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className='pt-2 space-y-2'>
                  {
                    Array.from({ length: 10 }).map((item, key) => (
                      <a href="#" key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-1.5 space-x-1.5">
                        <span className="text-xs font-medium text-gray-600">Fresh fruits</span>
                        <span>
                          <span className="badge bg-green-600 border-0 badge-xs font-medium text-white">100</span>
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

