import Image from 'next/image'
import Link from "next/link";
import React from 'react'

type Prop = {
    text: string
}

export const EmptyCart = ({ text } : Prop) => {
    return (
        <div>
            <div className="py-24 flex justify-center flex-col items-center">
                <div className="w-48">
                    <Image
                        className="w-full rounded-lg"
                        src="/empty-cart.svg"
                        alt="Empty Cart"
                        width={500}
                        height={350}
                        priority
                        layout="responsive"
                    />
                </div>
                
                <h1 className="text-xl font-medium py-2 pt-4 text-gray-400">
                    {text}
                </h1>

                <Link href="/">
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}
