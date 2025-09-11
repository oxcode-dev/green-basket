import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CakeIcon, ChatBubbleOvalLeftEllipsisIcon, CheckBadgeIcon, TruckIcon } from '@heroicons/react/20/solid'
import { Quicksand } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const benefitItems = [
  {
    icon: <TruckIcon className="size-8" />,
    title: 'Free Shipping',
    description: 'On order over $100',
  },
  {
    icon: <CakeIcon className="size-8" />,
    title: 'Always Fresh',
    description: 'Product well packaged',
  },
  {
    icon: <CheckBadgeIcon className="size-8" />,
    title: 'Superior Quality',
    description: 'Quality Products',
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="size-8" />,
    title: 'Support',
    description: '24/7 Support',
  },
]

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

      <div className="container w-full md:max-w-4xl mx-auto py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-6 items-center justify-center my-10">
          { benefitItems.map((item, key) => (
            <div key={key}>
              <div  className="flex flex-col space-y-4 items-center">
                <p>
                  <span className="size-5">{item.icon}</span>
                </p>
                <p className="text-sm font-semibold uppercase">
                  Free shipping
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase">
                  on order over $300
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page

