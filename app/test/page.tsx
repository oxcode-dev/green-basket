import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const page = () => {
  return (
    <div>
      <Header />

      <div className="container w-full mx-auto py-8">
        <div className="w-full flex relative h-full">

            <div className="relative z-50 py-26 space-y-8 px-20 flex flex-col justify-center">

              <p className="text-4xl font-bold">
                We serve fresh & organic foods
              </p>
              <p className="text-xl font-semibold">
                Fresh Items with big discount
              </p>

              <Link href="#" className="btn btn-info w-24">
                Shop
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

      <Footer />
    </div>
  )
}

export default page

