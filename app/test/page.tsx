import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { BenefitSection } from '@/sections/BenefitSection'
import { SubscriptionSection } from '@/sections/SubscriptionSection'
import { ArrowRightIcon, ChevronDownIcon, HeartIcon, ShoppingCartIcon, TagIcon } from '@heroicons/react/20/solid'
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
        <div className="w-full flex relative h-full px-4 sm:px-6">

            <div className="relative md:z-50 py-16 md:px-24 flex flex-col justify-center w-full md:max-w-xl">

              <div className="bg-[#c5ead9] md:bg-transparent space-y-3 md:space-y-5 p-3 md:p-0">
                <p className={`text-2xl md:text-4xl font-bold capitalize ${quicksand.className}`}>
                  We serve fresh & organic foods
                </p>
                <p className={`${quicksand.className} text-lg md:text-2xl font-semibold capitalize`}>
                  Fresh Items with big discount
                </p>

                <Link href="#" className="btn btn-success rounded w-32 text-white">
                  Shop Now
                </Link>
              </div>

            </div>

            <div className="absolute rounded-lg right-0 left-0 hidden md:flex">
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
          <div className="dropdown pb-8">
            <div tabIndex={0} role="button" className="btn btn-neutral">
              <div className="inline-flex items-center space-x-2">
                <span>
                  <TagIcon className="size-5" />
                </span>
                <span>All Categories</span>
                <span>
                  <ChevronDownIcon className="size-5" />
                </span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="bg-white menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Account
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
            </div>

            <div className="space-y-2 pb-2">
              <h3 className="font-semibold text-2xl">
                Popular Products
              </h3>
              <p className="font-medium text-gray-600 text-sm">
                These are some of our most popular products among customers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 sm:gap-4">
            { Array.from({ length: 20 }).map((item, key) => (
                <div key={key}>
                  <ProductCard />
                </div>
            ))}
            </div>

            <div className="py-8 flex justify-center">
              <button className="btn btn-pill">
                <span>Visit Shop</span>
                <ArrowRightIcon className="size-5" />
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

      {/* Review */}
      <div className="w-full mx-auto py-12 bg-gray-50">

        <div className="text-center space-y-4 w-full md:max-w-xl mx-auto pt-4">
          <p className="text-2xl md:text-3xl font-bold">
            Happy & Satisfied Faces
          </p>
          <p className="text-md text-gray-500 font-medium">
            Here's what some of our satisfied customers have to say about us.
          </p>
        </div>

        <div className="container w-full mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 pt-6">

          {
            Array.from({ length: 3 }).map((item, key) => (
              <div key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-8 space-x-1.5 bg-white">
                <div className="flex flex-col space-y-4 py-4">
                  <svg className="w-12 text-gray-400 fill-current opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum deserunt vitae voluptatem dolore sed, ducimus culpa.
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Femi Ojo
                    </p>
                    <p className="text-xs text-gray-600">
                      Business Analysis
                    </p>
                  </div>
                </div>
              </div>
            ))
          }

          </div>
        </div>

      </div>

      <SubscriptionSection />

      <Footer />
    </div>
  )
}

export default page

