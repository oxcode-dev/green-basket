import { CakeIcon, ChatBubbleOvalLeftEllipsisIcon, CheckBadgeIcon, TruckIcon } from '@heroicons/react/20/solid'
import React from 'react'

type BenefitProp = {
    title: string,
    description: string,
    icon: React.JSX.Element,
}

const benefitItems :BenefitProp[] = [
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
export const BenefitSection = () => {
    return (
        <div className="container w-full md:max-w-4xl mx-auto py-10 text-gray-600">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center my-10">
                { benefitItems.map((item, key) => (
                    <div key={key}>
                        <div  className="flex flex-col space-y-4 items-center">
                            <p>
                                <span className="size-5">{item.icon}</span>
                            </p>
                            <p className="text-sm font-semibold uppercase">
                                {item.title}
                            </p>
                            <p className="text-xs font-medium text-gray-500 uppercase">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
