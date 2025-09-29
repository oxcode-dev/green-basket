'use client'

import { ProductCard } from '@/components/ProductCard'
import { useFetchCategories } from '@/hooks/useFetchCategories'
import { BenefitSection } from '@/sections/BenefitSection'
import { CategoriesSection, CategoryDropdown } from '@/sections/CategoriesSection'
import { ReviewSection } from '@/sections/ReviewSection'
import { SubscriptionSection } from '@/sections/SubscriptionSection'
import { AppSetup } from '@/setups/AppSetup'
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
  const { categories } = useFetchCategories()
  return (
    <AppSetup>
      <div className="container w-full mx-auto md:py-8">
        <div className="w-full flex relative h-full px-4 sm:px-6">

            <div className="relative md:z-50 py-16 md:px-24 flex flex-col justify-center w-full md:max-w-xl">

              <div className="bg-[#c5ead9] md:bg-transparent space-y-3 md:space-y-5 p-4 md:p-0 rounded-md">
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

      <pre>{JSON.stringify(categories)}</pre>

      <div className="container w-full mx-auto py-8 px-4 md:px-0">
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <div className="w-full md:w-4/5 md:pr-6">
            <div>
              <CategoryDropdown />
            </div>

            <div className="space-y-2 pb-2">
              <h3 className="font-semibold text-2xl">
                Popular Products
              </h3>
              <p className="font-medium text-gray-600 text-sm pb-4">
                These are some of our most popular products among customers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-6 sm:gap-4">
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

          <div className="w-full md:w-1/5 md:flex hidden">
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
                  <CategoriesSection />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Review */}
      <ReviewSection />

      {/* <SubscriptionSection /> */}
    </AppSetup>
  )
}

export default page

