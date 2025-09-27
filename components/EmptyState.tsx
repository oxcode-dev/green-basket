import Image from 'next/image'
import React from 'react'

type Prop = {
    text: string
}

export const EmptyState = ({ text } : Prop) => {
    return (
        <div>
            <div className="py-24 flex justify-center flex-col items-center">
                <div className="w-48">
                    <Image
                        className="w-full rounded-lg"
                        src="/no_data.svg"
                        alt="No Data"
                        width={500}
                        height={350}
                        priority
                        layout="responsive"
                    />
                </div>
                
                <h1 className="text-xl font-medium py-2 text-gray-400">
                    {text}
                </h1>
            </div>
        </div>
    )
}
